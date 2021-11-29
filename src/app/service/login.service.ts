import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import jwt_decode from 'jwt-decode';
import { environment } from 'src/environments/environment';
import { LocalStorageService } from './local-storage.service';
import { JwtService } from './jwt.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private url = environment.url + '/autenticacao';
  private emRefresh = false;

  constructor(private http: HttpClient, 
              private localStorageService: LocalStorageService,
              private jwtService: JwtService,
              private route: Router) { }

  login(credenciais: any): void {
    this.http.post(`${this.url}/login`, credenciais).subscribe(success => {
      this.localStorageService.set('token', JSON.stringify(success));
      this.route.navigate(['']);
    });

  }

  refresh(token: string): Observable<any> {
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': `Bearer ${token}`
      })
    }
    return this.http.get(`${this.url}/token/refresh`, httpOptions);
  }

}
