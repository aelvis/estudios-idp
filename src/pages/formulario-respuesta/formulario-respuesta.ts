import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { CursoService } from '../../providers/curso/curso'

@Component({
  selector: 'page-formulario-respuesta',
  templateUrl: 'formulario-respuesta.html',
})
export class FormularioRespuestaPage {
	descripcion: string = "";
	  respuesta_pregunta:any[] = [];
  mensaje_pregunta:any[] = [];
  constructor(public navCtrl: NavController, public navParams: NavParams, private _cs: CursoService) {
  }
  ionViewWillEnter(){
    this._cs.getRespuesta(this.navParams.get("curso"),this.navParams.get("etapa"),this.navParams.get("formulario"),this.navParams.get("url"));
  }
  ingresar(curso, etapa, formulario, pregunta){
  	this._cs.register(this.descripcion,curso,etapa,formulario,pregunta).subscribe( 
		        data => { 
		        if(data.error){
			    }else{
			       this.respuesta_pregunta = data.codigo;
			       this.mensaje_pregunta = data.codigo;
			       console.log(this.respuesta_pregunta);
			       console.log(this.mensaje_pregunta);
			    }
    		});
  }
}
