import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-listado-alumnos-formularios-ver',
  templateUrl: 'listado-alumnos-formularios-ver.html',
})
export class ListadoAlumnosFormulariosVerPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListadoAlumnosFormulariosVerPage');
  }

}
