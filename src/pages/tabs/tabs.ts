import { Component } from '@angular/core';
import { HomePage } from '../home/home';
import { UsuarioPage, InicioPage } from '../index.paginas';

@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {
	tab1 = HomePage;
	tab2 = UsuarioPage;
	tab3 = InicioPage;


}
