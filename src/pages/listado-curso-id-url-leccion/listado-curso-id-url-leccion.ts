import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-listado-curso-id-url-leccion',
  templateUrl: 'listado-curso-id-url-leccion.html',
})
export class ListadoCursoIdUrlLeccionPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListadoCursoIdUrlLeccionPage');
  }

}
