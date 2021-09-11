import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FrutasComponent } from './components/frutas/frutas.component';
import { LimpezaComponent } from './components/limpeza/limpeza.component';

const routes: Routes = [
  {
    path: "frutas",
    component: FrutasComponent
  },
  {
    path: "limpeza",
    component: LimpezaComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
