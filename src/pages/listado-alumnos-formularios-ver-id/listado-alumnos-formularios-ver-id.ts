import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
@Component({
  selector: 'page-listado-alumnos-formularios-ver-id',
  templateUrl: 'listado-alumnos-formularios-ver-id.html',
})
export class ListadoAlumnosFormulariosVerIdPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListadoAlumnosFormulariosVerIdPage');
  }

}
