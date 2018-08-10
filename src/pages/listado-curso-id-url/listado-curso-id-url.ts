import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { CursoService } from '../../providers/curso/curso'
@Component({
  selector: 'page-listado-curso-id-url',
  templateUrl: 'listado-curso-id-url.html',
})
export class ListadoCursoIdUrlPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private _cs: CursoService) {
  this._cs.getListadoCursosIdUrlLeccion(this.navParams.get("curso"),this.navParams.get("id"),this.navParams.get("url"));
  }
}
