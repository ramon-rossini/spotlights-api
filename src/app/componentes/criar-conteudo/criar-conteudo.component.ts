import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { ToastrService } from 'ngx-toastr';

import { Conteudo } from 'src/app/models/conteudo';
import { ConteudoService } from 'src/app/services/conteudo.service';

@Component({
  selector: 'app-criar-conteudo',
  templateUrl: './criar-conteudo.component.html',
  styleUrls: ['./criar-conteudo.component.css']
})
export class CriarConteudoComponent implements OnInit {

  conteudoForm: FormGroup;

  etiqueta = 'Criar conteúdo'; // ETIQUETA PARA CRIAR/EDITAR CONTEÚDO
  botao = 'Criar'; // ETIQUETA DE BOTÃO PARA CRIAR/EDITAR

  id: string | null; // VARIÁVEL PARA EDITAR CONTEÚDO

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private toastr: ToastrService,
    private _conteudoService: ConteudoService,
    private aRouter: ActivatedRoute
  ) {
    this.conteudoForm = this.fb.group({
      titulo: ['', Validators.required],
      categoria: ['', Validators.required],
      idioma: ['', Validators.required],
      imdb: ['', Validators.required],
    })
    this.id = this.aRouter.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    this.atualizar();
  }

  criarConteudo() {

    const CONTEUDO: Conteudo = {
      titulo: this.conteudoForm.get('titulo')?.value,
      categoria: this.conteudoForm.get('categoria')?.value,
      idioma: this.conteudoForm.get('idioma')?.value,
      imdb: this.conteudoForm.get('imdb')?.value
    }

    // Caso ID tiver algum valor
    if (this.id != null) {
      this._conteudoService.putConteudo(this.id, CONTEUDO).subscribe(data => {
        this.toastr.success('O conteúdo foi editado com êxito', 'Conteúdo atualizado!');
        this.router.navigate(['/listar-conteudo']);
      }, err => {
        console.log(err);
        this.conteudoForm.reset();
      })
    } else { // Caso ID for nulo
      console.log(CONTEUDO);
      this._conteudoService.postConteudo(CONTEUDO).subscribe(data => {
        this.toastr.success('O conteúdo foi criado com êxito', 'Conteúdo adicionado!');
        this.router.navigate(['/listar-conteudo']);
      }, err => {
        console.log('Erro ao criar conteúdo', err);
        this.conteudoForm.reset();
      })
    }



  }

  atualizar() {
    if (this.id != null) {
      this.etiqueta = 'Editar conteúdo';
      this.botao = 'Editar';
      this._conteudoService.getConteudo(this.id).subscribe(data => {
        this.conteudoForm.setValue({
          titulo: data.titulo,
          categoria: data.categoria,
          idioma: data.idioma,
          imdb: data.imdb,
        })
      })
    }
  }

}
