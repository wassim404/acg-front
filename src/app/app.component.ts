import { Component, HostBinding } from '@angular/core';
import { AuthService, ScreenService, AppInfoService } from './shared/services';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AddProduitComponent } from './gestion-produits/add-produit/add-produit.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  {
  @HostBinding('class') get getClass() {
    return Object.keys(this.screen.sizes).filter(cl => this.screen.sizes[cl]).join(' ');
  }

  constructor(private authService: AuthService, private screen: ScreenService, public appInfo: AppInfoService  ) {
  
   }

  isAutorized() {
    return this.authService.isLoggedIn;
  }
}
