import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-leccion-etapa',
  templateUrl: 'leccion-etapa.html',
})
export class LeccionEtapaPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LeccionEtapaPage');
  }

}
