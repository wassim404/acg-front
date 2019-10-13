import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddFactureComponent } from './add-facture/add-facture.component';


const routes: Routes = [
  {
    path: '',
    component: AddFactureComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GestionFactureRoutingModule { }
