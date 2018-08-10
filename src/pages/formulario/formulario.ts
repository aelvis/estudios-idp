import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
@Component({
  selector: 'page-formulario',
  templateUrl: 'formulario.html',
})
export class FormularioPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FormularioPage');
  }

}
