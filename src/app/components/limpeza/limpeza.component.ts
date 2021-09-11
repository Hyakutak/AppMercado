import { Component, OnInit } from '@angular/core';
import { ProdutosService } from 'src/app/service/produtos.service';
import { Produto } from 'src/app/shared/produto';

@Component({
  selector: 'app-limpeza',
  templateUrl: './limpeza.component.html',
  styleUrls: ['./limpeza.component.scss']
})
export class LimpezaComponent implements OnInit {

  produtos!: Produto[];

  constructor(private service: ProdutosService) { 
    
  }

  ngOnInit(): void {
    this.service.list()
    .subscribe(dados => this.produtos = dados);
  }

}
