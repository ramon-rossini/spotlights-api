import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormGroup, FormBuilder, Validators, ValidatorFn, ValidationErrors } from '@angular/forms';
import { Router } from '@angular/router';

import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  public cadastroForm !: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private router: Router
  ) { }

  ngOnInit(): void {



    this.cadastroForm = this.formBuilder.group({
      nome:['', Validators.required],
      email:['', [Validators.required, Validators.email]],
      senha:['', Validators.required],
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

  /* VALIDACAO SENHA
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
  */

}
