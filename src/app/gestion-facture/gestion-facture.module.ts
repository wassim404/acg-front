import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GestionFactureRoutingModule } from './gestion-facture-routing.module';
import { AddFactureComponent } from './add-facture/add-facture.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DxCheckBoxModule, DxSelectBoxModule, DxFormModule, DxNumberBoxModule, DxAutocompleteModule, DxButtonModule } from 'devextreme-angular';
import { BrowserModule } from '@angular/platform-browser';
import { GestionProduitsService } from '../gestion-produits/shared/gestion-produits.service';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [AddFactureComponent],
  imports: [
    CommonModule,
    GestionFactureRoutingModule,
    DxFormModule,
    DxCheckBoxModule,
    DxSelectBoxModule,
    DxNumberBoxModule,
    DxButtonModule,
    DxAutocompleteModule,
    DxFormModule,
    HttpClientModule 
  ],
  providers: [GestionProduitsService]
})
export class GestionFactureModule { }
