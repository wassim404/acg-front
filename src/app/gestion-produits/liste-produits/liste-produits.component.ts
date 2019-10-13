import { Component, OnInit, AfterContentInit } from '@angular/core';
import { GestionProduitsService } from '../shared/gestion-produits.service';
import CustomStore from 'devextreme/data/custom_store';
import { HttpParams, HttpClient } from '@angular/common/http';
import { formatDate } from 'devextreme/localization';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap'; 
import { AddProduitComponent } from '../add-produit/add-produit.component';
@Component({
  selector: 'app-liste-produits',
  templateUrl: './liste-produits.component.html',
  styleUrls: ['./liste-produits.component.scss']
})
export class ListeProduitsComponent  {
  listProduit:any;
  isDataLoaded:boolean;
  requests: string[] = [];
 
  isPopupEditVisible:boolean
  dataSource: any={};
  customersData: any;
  shippersData: any;
  refreshModes: string[];
  refreshMode: string;
 
   URL:string = "http://localhost:9002/ProduitController"
  constructor(private http: HttpClient) {
      this.refreshMode = "reshape";
      this.refreshModes = ["full", "reshape", "repaint"];

/*       this.dataSource = new CustomStore({
          key: "id",
          load: () => this.sendRequest(this.URL + "/getAll"),
          insert: (values) => this.sendRequest(URL + "/InsertOrder", "POST", {
              values: JSON.stringify(values)
          }),
          update: (key, values) => this.sendRequest(URL + "/UpdateOrder", "PUT", {
              key: key,
              values: JSON.stringify(values)
          }),
          remove: (key) => this.sendRequest(URL + "/DeleteOrder", "DELETE", {
              key: key
          })
      }); */
      this.dataSource.store = new CustomStore({
        key: "id",
        load: function (loadOptions: any) {
            var params = '?';

            params += 'skip=' + loadOptions.skip;
            params += '&take=' + loadOptions.take;

            if(loadOptions.sort) {
                params += '&orderby=' + loadOptions.sort[0].selector;
                if(loadOptions.sort[0].desc) {
                    params += ' desc';
                }
            }
            return http.get("http://localhost:9002/ProduitController" + "/getAll" +params)
                .toPromise()
                .then((data: any) => {
                    return {
                        data: data.content,
                        totalCount: data.totalElements
                    }
                })
                .catch(error => { throw 'Data Loading Error' });
        },
        insert: (values) => this.http.post("http://localhost:9002/ProduitController" + "/add",values   )  .toPromise()
        .then((data: any) => {
           
        })
        .catch(error => { throw 'Data Loading Error' }),
        update: function (key, values) {
            return http.put('http://localhost:9002/ProduitController/update?id=' + key, values)
                .toPromise();
        },
        remove: (key) => this.http.delete("http://localhost:9002/ProduitController" + "/delete/"  +key )  .toPromise()
        .then((data: any) => {
           
        })
        .catch(error => { throw 'Data Loading Error' }),
       
    },
 
    
    
    
    
    
    
    );
    
  }


  sendRequest(url: string, method: string = "GET", data: any = {}): any {
      this.logRequest(method, url, data);

      let httpParams = new HttpParams({ fromObject: data });
      let httpOptions = { withCredentials: false, body: httpParams };
      let result;

      switch(method) {
          case "GET":
              result = this.http.get(this.URL + "/getAll", httpOptions);
              break;
          case "PUT":
              result = this.http.put(url, httpParams, httpOptions);
              break;
          case "POST":
              result = this.http.post(url, httpParams, httpOptions);
              break;
          case "DELETE":
              result = this.http.delete(url, httpOptions);
              break;
      }

      return result
          .toPromise()
          .then((data: any) => {
              return method === "GET" ? data.data : data;
          })
          .catch(e => {
              throw e && e.error && e.error.Message;
          });
  }

  logRequest(method: string, url: string, data: object): void {
      var args = Object.keys(data || {}).map(function(key) {
          return key + "=" + data[key];
      }).join(" ");

      var time = formatDate(new Date(), "HH:mm:ss");

      this.requests.unshift([time, method, url.slice(URL.length), args].join(" "))
  }

  clearRequests() {
      this.requests = [];
  }
 
}
