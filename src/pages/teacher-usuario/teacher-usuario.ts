import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AlumnoService } from '../../providers/alumno/alumno';

@Component({
  selector: 'page-teacher-usuario',
  templateUrl: 'teacher-usuario.html',
})
export class TeacherUsuarioPage {
	email: string = "";
	mensaje_pregunta: string = "";
  constructor(public navCtrl: NavController, public navParams: NavParams, private _cs: AlumnoService) {
  }
  ionViewWillEnter(){
  }
  register(){
	this._cs.cambiarUsuario(this.email).subscribe( 
		    data => { 
		        if(data.error){
			    }else{
			    	if(data.codigo == "success"){
						this.mensaje_pregunta = data.msg;
						this.email = "";
			    	}else{
			    	this.mensaje_pregunta = data.msg;	
			    	}
			    	
			    }
    		});
  }
}
