import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FrutasComponent } from './components/frutas/frutas.component';
import { LimpezaComponent } from './components/limpeza/limpeza.component';
import { ProdutosService } from './service/produtos.service';

@NgModule({
  declarations: [
    AppComponent,
    FrutasComponent,
    LimpezaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FontAwesomeModule
  ],
  providers: [ProdutosService],
  bootstrap: [AppComponent]
})

export class AppModule { }
