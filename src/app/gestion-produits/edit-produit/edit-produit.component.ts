import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { GestionProduitsService } from '../shared/gestion-produits.service';

@Component({
  selector: 'app-edit-produit',
  templateUrl: './edit-produit.component.html',
  styleUrls: ['./edit-produit.component.scss']
})
export class EditProduitComponent implements OnInit {

  constructor(public activeModal: NgbActiveModal,private gestionProduitsService:GestionProduitsService) {}
  public produit:ProduitDto;
  ngOnInit() {
    console.log(this.produit)
  }
  enregistrer(){
    
    this.gestionProduitsService.update(this.produit).subscribe(data=>{
      this.activeModal.close();
    })
   
  }
}
