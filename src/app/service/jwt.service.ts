import { Injectable } from '@angular/core';
import jwt_decode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class JwtService {

  constructor() { }

  tokenExpirado(jwt: any): boolean {
    jwt = jwt_decode(jwt);
    var current_time = Date.now() / 1000;
    return jwt.exp < current_time;
  }
}
