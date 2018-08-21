import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { UsuarioService, AlumnoService } from '../../providers/index.services';
import { LeccionEtapaPage } from '../../pages/index.paginas'
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage { 
  leccionEtapaPage = LeccionEtapaPage;
  constructor(public _alum: AlumnoService,public _usu: UsuarioService,public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewWillEnter() {
    this._alum.getListaActividades();
  }

}
