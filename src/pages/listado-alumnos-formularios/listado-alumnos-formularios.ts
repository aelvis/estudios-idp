import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-listado-alumnos-formularios',
  templateUrl: 'listado-alumnos-formularios.html',
})
export class ListadoAlumnosFormulariosPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListadoAlumnosFormulariosPage');
  }

}
