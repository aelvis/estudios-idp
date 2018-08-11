import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { CursoService } from '../../providers/curso/curso'

@Component({
  selector: 'page-formulario',
  templateUrl: 'formulario.html',
})
export class FormularioPage {
  datos:any[] = [];
  formulario:any[] = [];
  constructor(public navCtrl: NavController, public navParams: NavParams, private _cs: CursoService) {
  console.log(this.navParams.get("token"));
  }
  ionViewWillEnter(){
    this._cs.getFormulario(this.navParams.get("curso"),this.navParams.get("id"),this.navParams.get("url"),this.navParams.get("token")).subscribe( 
        data => { 
          if(data.preguntas.error){
        }else{
            this.datos = data.preguntas.datos;
            this.formulario = data.preguntas.formulario;
            console.log(this.datos);
            console.log(this.formulario);
          }
    });  
  }
}
