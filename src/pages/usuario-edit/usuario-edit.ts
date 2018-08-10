import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-usuario-edit',
  templateUrl: 'usuario-edit.html',
})
export class UsuarioEditPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UsuarioEditPage');
  }

}
