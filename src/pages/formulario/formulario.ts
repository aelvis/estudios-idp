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
  }
  ionViewWillEnter(){
    this._cs.getFormulario(this.navParams.get("curso"),this.navParams.get("id"),this.navParams.get("url")).subscribe( 
        data => { 
          console.log(data);
          if(data.error){
        }else{
            this.datos = data.datos;
            this.formulario = data.formulario;
            console.log(this.datos);
            console.log(this.formulario);
          }
    });  
  }
}
