import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AlumnoService } from '../../providers/index.services';

@Component({
  selector: 'page-listado-alumnos-formularios-ver-id',
  templateUrl: 'listado-alumnos-formularios-ver-id.html',
})
export class ListadoAlumnosFormulariosVerIdPage {

  constructor(private _alumnos: AlumnoService,public navCtrl: NavController, public navParams: NavParams) {
  }
  ionViewWillEnter(){
  	this._alumnos.getListaAlumnosFormularioVerId(this.navParams.get('url_formulario'),this.navParams.get('url_usuario_enviar'),this.navParams.get('pregunta'));
  }



}
