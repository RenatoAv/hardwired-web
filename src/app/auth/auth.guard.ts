import { Injectable, ɵɵqueryRefresh } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, of } from 'rxjs';
import { JwtService } from '../service/jwt.service';
import { LocalStorageService } from '../service/local-storage.service';
import { LoginService } from '../service/login.service';
import { map, catchError } from 'rxjs/operators';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private localStorageService: LocalStorageService, private jwtService: JwtService, private route: Router, private loginService: LoginService) {

  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean {
    let token = JSON.parse(this.localStorageService.get('token') as string);

    if(token) {
      let token = JSON.parse(this.localStorageService.get('token') as string);
      if(this.jwtService.tokenExpirado(token.access_token)) {
        return this.tokenRefresh(token.refresh_token);
      } else {
        return true;
      }
    } 
    
    this.route.navigate(['/login'])
    return false;
  }

  tokenRefresh(refresh_token: string): Observable<boolean> {
    return this.loginService.refresh(refresh_token).pipe(
      map(sucess =>  {
        this.localStorageService.set('token', JSON.stringify(sucess))
        return true;
      }),
      catchError(() => of(false))
    )
  }
  
}
