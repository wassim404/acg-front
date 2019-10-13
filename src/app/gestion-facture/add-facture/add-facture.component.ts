import { Component, OnInit } from '@angular/core';
import { Facture } from 'src/app/models/facture.model';
import { GestionProduitsService } from 'src/app/gestion-produits/shared/gestion-produits.service';
import { Depot } from 'src/app/models/depot';

@Component({
  selector: 'app-add-facture',
  templateUrl: './add-facture.component.html',
  styleUrls: ['./add-facture.component.scss']
})
export class AddFactureComponent implements OnInit {

  companies: {};
  labelLocation: string;
  readOnly: boolean;
  showColon: boolean;
  minColWidth: number;
  colCount: number;
  width: any;
  facture: Facture;
  listProduits: Array<ProduitDto>;
  loadedDepotList: Array<Depot>;
  selectedProduit: ProduitDto;
  selectedDepot: Depot;
  constructor(private gestionProduitsService: GestionProduitsService) {

    this.facture = new Facture("", "");
    this.labelLocation = "top";
    this.readOnly = false;
    this.showColon = true;
    this.minColWidth = 300;
    this.colCount = 2;
    this.gestionProduitsService.getListProduits().subscribe(data => {
      this.listProduits = data["content"];
    })
  }

  ngOnInit() {
  }
  private fieldArray: Array<any> = [];
  private listDepotArray: Array<any> = [];
  private listProduitArray: Array<any> = [];
  private newAttribute: any = {};

  addFieldValue() {
    this.fieldArray.push(this.newAttribute)
    this.newAttribute = {};
  }

  chargerListDepot() {
    console.log(this.selectedProduit)
    this.gestionProduitsService.getListDepot(this.selectedProduit.id).subscribe(data => {
      this.loadedDepotList = data;
    });
  }

  getQtParDepotEtProduit() {
    this.gestionProduitsService.getQtParDepotEtProduit(this.selectedProduit.id, this.selectedDepot.id).subscribe(data => {
      console.log(data)
    });
  }
  deleteFieldValue(index) {
    this.fieldArray.splice(index, 1);
  }
}
