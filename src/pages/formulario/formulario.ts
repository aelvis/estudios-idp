import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { CursoService } from '../../providers/curso/curso'

@Component({
  selector: 'page-formulario',
  templateUrl: 'formulario.html',
})
export class FormularioPage {
  form_datos:any[] = [];
  constructor(public navCtrl: NavController, public navParams: NavParams, private _cs: CursoService) {
  }
  ionViewWillEnter(){
    this._cs.getFormulario(this.navParams.get("curso"),this.navParams.get("id"),this.navParams.get("url")).subscribe( 
        data => { 
          if(data.error){
        }else{
            this.form_datos = data.datos;
            console.log(this.form_datos);
          }
    } );  }
}
