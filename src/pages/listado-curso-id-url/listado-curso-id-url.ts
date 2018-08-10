import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-listado-curso-id-url',
  templateUrl: 'listado-curso-id-url.html',
})
export class ListadoCursoIdUrlPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListadoCursoIdUrlPage');
  }

}
