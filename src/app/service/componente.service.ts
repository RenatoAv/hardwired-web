import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ComponenteService {

  private url = environment.url + '/componente';

  constructor(private http: HttpClient) { }

  listar(page: number): Observable<any> {
    return this.http.get(`${this.url}?page=${page}`);
  }

  salvar(componente: any) {
    return this.http.post(`${this.url}`, componente);
  }

  remover(id: number) {
    return this.http.delete(`${this.url}/${id}`);
  }

}
