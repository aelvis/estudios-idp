import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { CursoService } from '../../providers/curso/curso'

@Component({
  selector: 'page-formulario-respuesta',
  templateUrl: 'formulario-respuesta.html',
})
export class FormularioRespuestaPage {
	descripcion: string = "";
  constructor(public navCtrl: NavController, public navParams: NavParams, private _cs: CursoService) {
  	console.log(this.navParams.get("curso"),this.navParams.get("etapa"),this.navParams.get("formulario"),this.navParams.get("url"));
  }
  ionViewWillEnter(){
    this._cs.getRespuesta(this.navParams.get("curso"),this.navParams.get("etapa"),this.navParams.get("formulario"),this.navParams.get("url"));
  }

}
