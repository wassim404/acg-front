import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GestionProduitsRoutingModule } from './gestion-produits-routing.module';
import { ListeProduitsComponent } from './liste-produits/liste-produits.component';
import { DxDataGridModule, DxButtonModule, DxPopupModule } from 'devextreme-angular';
import { GestionProduitsService } from './shared/gestion-produits.service';
import { HttpClientModule } from '@angular/common/http';
import { AddProduitComponent } from './add-produit/add-produit.component';
import { EditProduitComponent } from './edit-produit/edit-produit.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [ListeProduitsComponent, AddProduitComponent, EditProduitComponent],
  imports: [
    CommonModule,
    DxDataGridModule,
    GestionProduitsRoutingModule,
    HttpClientModule,
    DxButtonModule,
    DxPopupModule,
    NgbModule ,
  
  ],
 

  providers: [GestionProduitsService]
})
export class GestionProduitsModule { }
