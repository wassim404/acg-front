import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Depot } from 'src/app/models/depot';


@Injectable({
  providedIn: 'root'
})
export class GestionProduitsService {
  urlGetListProduits = "http://localhost:9002/ProduitController/getAll";
  urlGetListDepot = "http://localhost:9002/ProduitController/getListDepot";
  urlGetQtParDepotEtProduit = "http://localhost:9002/ProduitDepotStockController/getQuantiteByProduitAndDepot";
  urlUpdateEtProduit = "http://localhost:9002/ProduitController/update";
  
  constructor(private httpClient: HttpClient) { }

  getListProduits(): Observable<ProduitDto[]> {
    return this.httpClient.get<ProduitDto[]>(this.urlGetListProduits)
  }

  getListDepot(id: number): Observable<Depot[]> {
    return this.httpClient.get<Depot[]>(this.urlGetListDepot + "/" + id);
  }

  getQtParDepotEtProduit(idProduit: number, idDepot: number): Observable<number> {
    return this.httpClient.get<number>(this.urlGetQtParDepotEtProduit + "?idDepot=" + idDepot + "&idProduit=" + idProduit);
  }
  update(produit:ProduitDto):Observable<ProduitDto>{
    console.log(produit)
    console.log("sdffsf")
    return this.httpClient.put<ProduitDto>(this.urlUpdateEtProduit,produit,{});
  }
}
