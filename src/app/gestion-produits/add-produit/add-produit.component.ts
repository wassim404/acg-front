import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { EditProduitComponent } from '../edit-produit/edit-produit.component';

@Component({
  selector: 'app-add-produit',
  templateUrl: './add-produit.component.html',
  styleUrls: ['./add-produit.component.scss']
})
export class AddProduitComponent implements OnInit {

  constructor( private modalService: NgbModal) { }
 

  ngOnInit() {
  
  }
  modifier(){
    console.log("modifier")
    const modalRef = this.modalService.open(EditProduitComponent);
 
}
}
