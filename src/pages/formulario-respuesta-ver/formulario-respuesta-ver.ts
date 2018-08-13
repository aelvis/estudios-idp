import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { CursoService } from '../../providers/curso/curso'

@Component({
  selector: 'page-formulario-respuesta-ver',
  templateUrl: 'formulario-respuesta-ver.html',
})
export class FormularioRespuestaVerPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private _cs: CursoService) {
  }
  ionViewWillEnter(){
    this._cs.getRespuestaVer(this.navParams.get("curso"),this.navParams.get("etapa"),this.navParams.get("formulario"),this.navParams.get("url"));
  }
}
