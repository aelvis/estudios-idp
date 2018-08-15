import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AlumnoService } from '../../providers/index.services';
import { ListadoAlumnosFormulariosVerPage } from '../index.paginas';

@Component({
  selector: 'page-listado-alumnos-formularios',
  templateUrl: 'listado-alumnos-formularios.html',
})
export class ListadoAlumnosFormulariosPage {
	listadoAlumnosFormulariosVerPage = ListadoAlumnosFormulariosVerPage;
  constructor(private _alumnos: AlumnoService,public navCtrl: NavController, public navParams: NavParams) {
  }
  ionViewWillEnter(){
  	this._alumnos.getListaAlumnosFormulario(this.navParams.get('url_usuario'));
  }


}
