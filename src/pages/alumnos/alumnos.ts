import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AlumnoService } from '../../providers/index.services';
import { ListadoAlumnosFormulariosPage } from '../index.paginas';
@Component({
  selector: 'page-alumnos',
  templateUrl: 'alumnos.html',
})
export class AlumnosPage {
	listadoAlumnosFormulariosPage = ListadoAlumnosFormulariosPage;
  constructor(public navCtrl: NavController, public navParams: NavParams, private _alumnos: AlumnoService) {
  }

  ionViewWillEnter(){
  	this._alumnos.getListaAlumnos();
  }

}
