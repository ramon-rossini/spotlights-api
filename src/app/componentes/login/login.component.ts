import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loginForm!: FormGroup

  constructor(private formBuilder: FormBuilder, private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email:[''],
      senha:['']
    })
  }

  login(){
    this.http.get<any>(environment.apiUrl).subscribe(res=>{
      const user = res.find((a:any)=>{
        return a.email === this.loginForm.value.email && a.senha === this.loginForm.value.senha
      });
      if(user){
        alert('Login Efetuado');
        this.loginForm.reset();
        this.router.navigate(['inicio'])
      } else{
        alert('Usuário não encontrado');
      }
    }, err=>{
      alert('Erro ao fazer login')
    })
  }

}
