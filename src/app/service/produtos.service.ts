import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

import { Produto } from "src/app/shared/produto";

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {

  private readonly API = 'http://localhost:3000/produtos';

  constructor(private http: HttpClient) {  }
    list() {
      return this.http.get<Produto[]>(this.API);
    }
}