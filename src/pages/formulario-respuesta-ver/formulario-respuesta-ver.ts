import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-formulario-respuesta-ver',
  templateUrl: 'formulario-respuesta-ver.html',
})
export class FormularioRespuestaVerPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FormularioRespuestaVerPage');
  }

}
