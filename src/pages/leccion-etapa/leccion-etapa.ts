import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-leccion-etapa',
  templateUrl: 'leccion-etapa.html',
})
export class LeccionEtapaPage {
  datos:any[] = [];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  ionViewWillEnter(){
  	this.datos = this.navParams.get("enviar");
  }
}
