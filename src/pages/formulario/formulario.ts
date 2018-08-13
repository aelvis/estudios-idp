import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { CursoService } from '../../providers/curso/curso'

import { FormularioRespuestaPage, FormularioRespuestaVerPage } from '../index.paginas';

@Component({
  selector: 'page-formulario',
  templateUrl: 'formulario.html',
})
export class FormularioPage {
  formularioRespuestaPage = FormularioRespuestaPage;
  formularioRespuestaVerPage = FormularioRespuestaVerPage;
  constructor(public navCtrl: NavController, public navParams: NavParams, private _cs: CursoService) {
  }
  ionViewWillEnter(){

    this._cs.getFormulario(this.navParams.get("curso"),this.navParams.get("id"),this.navParams.get("url"));
  }
}
