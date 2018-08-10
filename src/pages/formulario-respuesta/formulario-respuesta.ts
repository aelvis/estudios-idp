import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-formulario-respuesta',
  templateUrl: 'formulario-respuesta.html',
})
export class FormularioRespuestaPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FormularioRespuestaPage');
  }

}
