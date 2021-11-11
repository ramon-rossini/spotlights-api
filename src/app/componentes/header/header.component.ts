import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, ValidatorFn } from '@angular/forms';

import { UsuariosService } from 'src/app/usuarios.service';
import { UsuarioModel } from './usuario.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  substituir = {
    nome: "Usuario",
    email: "otario@email.com"
  }

  //API
  usuario: UsuarioModel = new UsuarioModel();
  usuarios: Array<any> = new Array();

  myForm!: FormGroup //Formulário de cadastro

  constructor(private usuariosService: UsuariosService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.listarUsuarios();

    //Formulário de Cadastro
    this.myForm = this.fb.group({
      password: this.fb.control(null),
      confirmPassword: this.fb.control(null),
    }, {
      validators: this.controlValuesAreEqual('password', 'confirmPassword')
    })
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

  //Formulário de Cadastro
  private controlValuesAreEqual(controlNameA: string, controlNameB: string): ValidatorFn{
    return (control: AbstractControl): ValidationErrors | null => {
      const formGroup = control as FormGroup
      const valueOfControlA = formGroup.get(controlNameA)?.value
      const valueOfControlB = formGroup.get(controlNameB)?.value
      
      if (valueOfControlA === valueOfControlB) {
        return null
      } else {
        return { valuesDoNotMatch: true }
      }
    }
  }

}
