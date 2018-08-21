import { Component } from '@angular/core';
import { HomePage } from '../home/home';
import { UsuarioPage, InicioPage, LoginPage } from '../index.paginas';

@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {
	tab1 = InicioPage;
	tab2 = HomePage;
	tab3 = UsuarioPage;
	tab4 = LoginPage;

  constructor() {
  }
  ionViewWillEnter(){

  }

}
