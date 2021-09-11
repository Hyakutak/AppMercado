import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { ProdutosService } from 'src/app/service/produtos.service';
import { Produto } from 'src/app/shared/produto';

@Component({
  selector: 'app-frutas',
  templateUrl: './frutas.component.html',
  styleUrls: ['./frutas.component.scss']
})
export class FrutasComponent implements OnInit {
  
  produtos!: Produto[];

  constructor(private service: ProdutosService) { 
    
  }

  ngOnInit(): void {
    this.service.list()
    .subscribe(dados => this.produtos = dados);
  }

}
