import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  public cadastroForm !: FormGroup;

  constructor(private formBuilder: FormBuilder, private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.cadastroForm = this.formBuilder.group({
      nome:['', Validators.required],
      email:['', Validators.required],
      senha:['', Validators.required]
    })
  }

  cadastrar(){
    this.http.post<any>(environment.apiUrl, this.cadastroForm.value).subscribe(res=>{
      alert('Cadastro realizado');
      this.cadastroForm.reset();
      this.router.navigate(['login']);
      console.log(this.cadastroForm.value)
    }, err => {
      alert('Erro ao cadastrar')
    })
  }

}
