import { Injectable } from '@angular/core';
import { Http, URLSearchParams } from '@angular/http';
import 'rxjs/add/operator/map';
import { AlertController, Platform } from 'ionic-angular';
import { URL_SERVICIOS } from '../../config/url.servicios';
import { Storage } from '@ionic/storage';

@Injectable()
export class UsuarioService {
  token;
  identity;
  constructor(public http: Http, private alertCtrl: AlertController, private platform: Platform, private storage: Storage) {
	this.getToken();
	this.getIdentity();
  }
  activo(): boolean{
  	if(this.token){
  		return true;
  	}else{
  		return false;
  	}
  }
  /*register(nombre:string, correo:string, password:string,celular:string,codigo:string){
    let params = new URLSearchParams();
    params.append("nombre", nombre);
    params.append("password", password);
    params.append("correo", correo);
    params.append("celular", celular);
    params.append("codigo", codigo);
    let url = URL_SERVICIOS + 'auth/registroLogin/';
    return this.http.post(url, params).map(res => {
        let data_report = res.json();
        if(data_report.error){
          this.alertCtrl.create({
            title:"Error al Iniciar",
            subTitle: data_report.error.msg,
            buttons: ["OK"]
          }).present();
        }
      });
  }*/
  register(nombre:string, correo:string, password:string,celular:string,codigo:string){
    let params = new URLSearchParams();
    params.append("nombre", nombre);
    params.append("password", password);
    params.append("correo", correo);
    params.append("celular", celular);
    params.append("codigo", codigo);
    let url = URL_SERVICIOS + 'auth/registroLogin/';
    return this.http.post(url, params).map(res => res.json());
  }
  ingresar(correo:string, password:string){
  	let data = new URLSearchParams();
  	data.append("correo", correo);
  	data.append("password", password);
  	let url = URL_SERVICIOS + 'auth/loginIonic/';
  	  return this.http.post(url,data).map(res => {
    		let data_rest = res.json();
    		if(data_rest.error){
    			this.alertCtrl.create({
    				title:"Error al Iniciar",
    				subTitle: data_rest.error.msg,
    				buttons: ["OK"]
    			}).present();
    		}else{
    			this.token  = data_rest.usuario.token;
    			this.identity  = data_rest.usuario.datos;
    			//GUARDAR DATOS STORAGE  			
  			this.guardar_session_token();
  			this.guardar_session_identity();
    		}
    	});
  }
  cerrar_sesion(){
  	this.token = null;
  	this.identity = null;
  	this.guardar_session_token();
  	this.guardar_session_identity();
  }
  private guardar_session_token(){
  	if(this.platform.is("cordova")){
  		//celular
  		if(this.token){
  			this.storage.set("token", this.token);
  		}else{
        this.storage.remove("token");
      }
  	}else{	
  		//desktop
  		if(this.token){
  			localStorage.setItem("token", this.token);
  		}else{
  			localStorage.removeItem("token");
  		}
  	}
  }
  private guardar_session_identity(){
  	if(this.platform.is("cordova")){
  		//celular
  		if(this.identity){
  			this.storage.set("identity", JSON.stringify(this.identity));
  		}
  	}else{	
  		//desktop
  		if(this.identity){
  			localStorage.setItem("identity", JSON.stringify(this.identity));
  		}else{
  			localStorage.removeItem("identity");
  		}
  		
  	}
  }
  getToken(){
  	let promesa = new Promise((resolve, reject) => {
	  	if(this.platform.is("cordova")){
	  		this.storage.ready().then(()=>{
	  			this.storage.get("token").then(token => {
	  				if(token){
	  					this.token = token;
	  				}
	  				resolve();
	  			})
	  		});
	  	}else{
	  		if(localStorage.getItem("token")){
	  			this.token = localStorage.getItem("token");
	  		}
	  		resolve();
	  	}
  	});
  	return promesa;
  }
  getIdentity(){
  	let promesa = new Promise((resolve, reject) => {
	  	if(this.platform.is("cordova")){
	  		this.storage.ready().then(()=>{
	  			this.storage.get("identity").then(identity => {
	  				if(identity){
	  					this.identity = identity;
	  				}
	  				resolve();
	  			})
	  		});
	  	}else{
	  		if(localStorage.getItem("identity")){				
				this.identity = JSON.parse(localStorage.getItem("identity"));
	  		}
	  		resolve();
	  	}
  	});
  	return promesa;
  }
}
