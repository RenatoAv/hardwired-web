import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MontagemService {

  private url = environment.url + '/montagem'

  constructor(private http: HttpClient) { }

  listar(page: number): Observable<any> {
    return this.http.get(`${this.url}?page=${page}`);
  }

  salvar(montagem: any): Observable<any> {
    return this.http.post(`${this.url}`, montagem);
  }

  remover(id: number): Observable<any> {
    return this.http.delete(`${this.url}/${id}`);
  }
}
