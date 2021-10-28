import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UsuarioModel } from './componentes/header/usuario.model';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor( private http: HttpClient ) { }

  cadastrarUsuario(usuario: UsuarioModel): Observable<any> {
    return this.http.post(environment.apiUrl, usuario);
  }

  listarUsuarios() : Observable<any>{
    return this.http.get(environment.apiUrl);
  }

  atualizarUsuario(id: any, usuario: UsuarioModel) : Observable<any>{
    return this.http.put(environment.apiUrl.concat(id), usuario);
  }

  removerUsuario(id: any) : Observable<any>{
    return this.http.delete(environment.apiUrl.concat(id));
  }

}
