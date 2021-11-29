import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject, throwError } from 'rxjs';
import { LocalStorageService } from '../service/local-storage.service';
import { catchError, map, tap, switchMap } from 'rxjs/operators';
import { LoginService } from '../service/login.service';
import { Router } from '@angular/router';

@Injectable()
export class AutorizacaoInterceptorService implements HttpInterceptor {

  refreshTokenInProgress = false;
  tokenRefreshedSource = new Subject();
  tokenRefreshed$ = this.tokenRefreshedSource.asObservable();
  refresh_token = "";

  constructor(private localStorageService: LocalStorageService, private loginService: LoginService, private route: Router) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let token = JSON.parse(this.localStorageService.get('token') as string);
    let request = req;
    
    console.log('interceptor');
    if(token) {
      if(!request.url.includes('token/refresh')) {
        console.log('adiciona token ao header')
        request = req.clone({
          headers: req.headers.set('Authorization', `Bearer ${token.access_token}`)
        });
      }
      this.refresh_token = token.refresh_token;
    }

    return next.handle(request).pipe(catchError(error => 
      this.handleResponseError(error, request, next)
    ));
    
  }

  refreshToken(): Observable<any> {
    if (this.refreshTokenInProgress) {
      console.log('aguardando finalizar refresh');
      return new Observable(observer => {
          this.tokenRefreshed$.subscribe(() => {              
            observer.next();
            observer.complete();
            console.log('refazendo consulta');
          });
      });
    } else {
      this.refreshTokenInProgress = true;
      console.log('iniciando refresh');
      return this.loginService.refresh(this.refresh_token).pipe(
          tap((data) => {
            console.log('refresh finalizado', data);
            this.refreshTokenInProgress = false;
            this.localStorageService.set('token', JSON.stringify(data));
            this.tokenRefreshedSource.next();
          }),
          catchError((error) => {
            console.log('ERRO ao refresh');
            this.refreshTokenInProgress = false;
            this.logout();
            return throwError(error);
          }));
    }
  }

  handleResponseError(error: any, request?: any, next?: any): Observable<HttpEvent<any>> {

    if (error.status === 401) {
      console.log('erro 401');
        return this.refreshToken().pipe(
            switchMap(() => {
              let token = JSON.parse(this.localStorageService.get('token') as string);
              let req = request.clone({
                headers: request.headers.set('Authorization', `Bearer ${token.access_token}`)
              });
              return next.handle(req) as Observable<HttpEvent<any>>;
            }),
            catchError(e => {
              console.log('erro ao tentar refresh');
              if (e.status !== 401) {
                console.log('erro interno');
                return this.handleResponseError(e);
              } else {
                console.log('fazendo logout');
                this.logout();
              }
              
              return throwError(e);
            }));
    }

    return throwError(error);
}

  logout() {
    this.localStorageService.remove('token');
    this.route.navigate(["login"]);
  }

}
