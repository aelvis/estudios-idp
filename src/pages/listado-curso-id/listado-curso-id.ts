import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { CursoService } from '../../providers/curso/curso'
import { FormularioPage } from '../index.paginas';

@Component({
  selector: 'page-listado-curso-id',
  templateUrl: 'listado-curso-id.html',
})
export class ListadoCursoIdPage {
  pet: string = "inicio";
  constructor(public navCtrl: NavController, public navParams: NavParams, private _cs: CursoService) {
  }
  
  ionViewWillEnter(){
  	this._cs.getListadoCursosIdUrl(this.navParams.get("curso"),this.navParams.get("id"));
  }
}
