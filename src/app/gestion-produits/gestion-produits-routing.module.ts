import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListeProduitsComponent } from './liste-produits/liste-produits.component';
import { AddProduitComponent } from './add-produit/add-produit.component';


const routes: Routes = [
  {
    path: '',
    component: ListeProduitsComponent
  },
  {
    path: 'add',
    component: AddProduitComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GestionProduitsRoutingModule { }
