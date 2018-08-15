import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AlumnoService } from '../../providers/index.services';
import { ListadoAlumnosFormulariosVerIdPage } from '../index.paginas';
@Component({
  selector: 'page-listado-alumnos-formularios-ver',
  templateUrl: 'listado-alumnos-formularios-ver.html',
})
export class ListadoAlumnosFormulariosVerPage {
listadoAlumnosFormulariosVerIdPage = ListadoAlumnosFormulariosVerIdPage;
  constructor(private _alumnos: AlumnoService,public navCtrl: NavController, public navParams: NavParams) {
  }
  ionViewWillEnter(){
  	this._alumnos.getListaAlumnosFormularioVer(this.navParams.get('url_formulario'),this.navParams.get('url_usuario_enviar'));
  }


}
