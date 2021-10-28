import { Component, OnInit } from '@angular/core';
import { UsuariosService } from 'src/app/usuarios.service';
import { UsuarioModel } from './usuario.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  usuario: UsuarioModel = new UsuarioModel();
  usuarios: Array<any> = new Array();

  constructor( private usuariosService: UsuariosService ) { }

  ngOnInit(): void {
    this.listarUsuarios();
  }

  atualizar(id: number){
    this.usuariosService.atualizarUsuario(id, this.usuario).subscribe(usuario => {
      this.usuario = new UsuarioModel();
      this.listarUsuarios();
    }, err => {
      console.log("Erro ao atualizar o usuario", err)
    })
  }

  remover(id: number){
    this.usuariosService.removerUsuario(id).subscribe(usuario => {
      this.usuario = new UsuarioModel();
      this.listarUsuarios();
    }, err => {
      console.log("Erro ao remover o usuario", err)
    })
  }

  cadastrar(){
    console.log(this.usuario);
    this.usuariosService.cadastrarUsuario(this.usuario).subscribe(usuario => {
      this.usuario = new UsuarioModel();
      this.listarUsuarios();
    }, err => {
      console.log("Erro ao cadastrar o usuario", err)
    })
  }

  listarUsuarios(){
    this.usuariosService.listarUsuarios().subscribe(usuarios => {
      this.usuarios = usuarios;
    }, err => {
      console.log("Erro ao listar os usuarios", err);
    })
  }

}
