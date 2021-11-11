import { Component, OnInit } from '@angular/core';

import { ToastrService } from 'ngx-toastr';

import { Conteudo } from 'src/app/models/conteudo';
import { ConteudoService } from 'src/app/services/conteudo.service';

@Component({
  selector: 'app-listar-conteudo',
  templateUrl: './listar-conteudo.component.html',
  styleUrls: ['./listar-conteudo.component.css']
})
export class ListarConteudoComponent implements OnInit {

  // Lista para guardar valores do get
  listConteudos: Conteudo[] = [];

  constructor(private _conteudoService: ConteudoService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.obterConteudos();
  }

  obterConteudos() {
    this._conteudoService.getConteudos().subscribe(data => {
      console.log(data);
      this.listConteudos = data;
    }, err => {
      console.log('Erro ao obter os conteúdos', err);
    })
  }

  excluirConteudo(id: any) {
    this._conteudoService.deleteConteudo(id).subscribe(data => {
      this.toastr.success('O conteúdo foi excluído com êxito', 'Conteúdo excluído!');
      this.obterConteudos();
    }, err => {
      console.log('Erro ao excluir o conteúdo', err);
    })
  }

}
