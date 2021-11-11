import { Component, OnInit } from '@angular/core';

import { UsuarioModel } from '../header/usuario.model';
import { UsuariosService } from 'src/app/usuarios.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  //API
  usuario: UsuarioModel = new UsuarioModel();
  usuarios: Array<any> = new Array();

  constructor(private usuariosService: UsuariosService) { }

  ngOnInit(): void {

    this.listarUsuarios();

  }

  //API
  atualizar(id: number){
    this.usuariosService.atualizarUsuario(id, this.usuario).subscribe(usuario => {
      this.usuario = new UsuarioModel();
      this.listarUsuarios();
    }, err => {
      console.log("Erro ao atualizar o usuario", err)
    })
  }

  //API
  remover(id: number){
    this.usuariosService.removerUsuario(id).subscribe(usuario => {
      this.usuario = new UsuarioModel();
      this.listarUsuarios();
    }, err => {
      console.log("Erro ao remover o usuario", err)
    })
  }

  //API
  cadastrar(){
    console.log(this.usuario);
    this.usuariosService.cadastrarUsuario(this.usuario).subscribe(usuario => {
      this.usuario = new UsuarioModel();
      this.listarUsuarios();
    }, err => {
      console.log("Erro ao cadastrar o usuario", err)
    })
  }

  //API
  listarUsuarios(){
    this.usuariosService.listarUsuarios().subscribe(usuarios => {
      this.usuarios = usuarios;
    }, err => {
      console.log("Erro ao listar os usuarios", err);
    })
  }

}
