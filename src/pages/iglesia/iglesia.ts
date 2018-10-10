import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AlumnoService } from '../../providers/alumno/alumno';
@Component({
  selector: 'page-iglesia',
  templateUrl: 'iglesia.html',
})
export class IglesiaPage {
	nombre: string = "";
	direccion: string = "";
	codigo: string = "";
	mensaje_pregunta:string = "";
	mensaje:string = "";
  constructor(public navCtrl: NavController, public navParams: NavParams, private _usu:AlumnoService) {
  }
  ionViewWillEnter(){
  	this.iglesia();
  }
  iglesia(){
  	this._usu.getIglesia().subscribe(
  		data => {
  			if(data.error){

  			}else{
  				this.mensaje = data.mensaje;
  			}
  		}
  	);
  }
  register(){
	this._usu.registeriglesia(this.nombre,this.direccion, this.codigo).subscribe( 
		    data => { 
		        if(data.error){
			    }else{
			    	if(data.codigo == "success"){
						this.mensaje_pregunta = data.msg;
						this.nombre = "";
						this.direccion = "";
						this.codigo = "";
						this.iglesia();
			    	}else{
			    	this.mensaje_pregunta = data.msg;	
			    	}
			    	
			    }
    		});
  }
}
