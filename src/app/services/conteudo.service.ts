import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Conteudo } from '../models/conteudo';

@Injectable({
  providedIn: 'root'
})
export class ConteudoService {

  constructor(private http: HttpClient) { }

  getConteudos(): Observable<any> {
    return this.http.get(environment.apiLink);
  }

  deleteConteudo(id: string): Observable<any> {
    return this.http.delete(environment.apiLink + id);
  }

  postConteudo(conteudo: Conteudo): Observable<any> {
    return this.http.post(environment.apiLink, conteudo);
  }

  getConteudo(id: string): Observable<any> {
    return this.http.get(environment.apiLink + id);
  }

  putConteudo(id: string, conteudo: Conteudo): Observable<any> {
    return this.http.put(environment.apiLink + id, conteudo);
  }

}
