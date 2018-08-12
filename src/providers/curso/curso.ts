import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { Platform } from 'ionic-angular';
import { URL_SERVICIOS } from '../../config/url.servicios';
import { Storage } from '@ionic/storage';
@Injectable()
export class CursoService {
	token;
  constructor(public http: Http, private platform: Platform, private storage: Storage) {
  }
	getCursos(){
		let url = URL_SERVICIOS + 'usuario/listadoCursosIonic/';
		return this.http.get(url).map(res => res.json());
	}
  	getListadoCursosId(id_curso){
	  	let url = URL_SERVICIOS + 'usuario/listadoCursosIdIonic/'+id_curso;
	  	return this.http.get(url).map(res => res.json());
	}
	getListadoCursosIdUrl(id_curso,id_etapa){
		let url = URL_SERVICIOS + 'usuario/listadoCursosIdUrlIonic/'+id_curso+"/"+id_etapa;
	  	return this.http.get(url).map(res => res.json());
	}
	getListadoCursosIdUrlLeccion(id_curso,id_etapa,url_leccion){
		let url = URL_SERVICIOS + 'usuario/listadoCursosIdUrlLeccionIonic/'+id_curso+"/"+id_etapa+"/"+url_leccion;
		return this.http.get(url).map(res => res.json());
	}
	getListadoCursosIdUrlLeccionLista(id_curso,id_etapa,url_leccion,url_etapa_leccion){
		let url = URL_SERVICIOS + 'usuario/listadoCursosIdUrlLeccionListaIonic/'+id_curso+"/"+id_etapa+"/"+url_leccion+"/"+url_etapa_leccion;
		return this.http.get(url).map(res => res.json());
	}

	getFormulario(id_curso,id_etapa,url_formulario){
		let url = URL_SERVICIOS + 'usuario/formulario/'+id_curso+"/"+id_etapa+"/"+url_formulario;
		if(this.platform.is("cordova")){
			let headers = new Headers({'Content-Type':'application/json','Authorization': this.getTokenPhone()});
			let options = new RequestOptions({headers: headers});
			return this.http.get(url, options).map(res => res.json());		
		}else{
			let headers = new Headers({'Content-Type':'application/json','Authorization': this.getTokenDesktop()});
			let options = new RequestOptions({headers: headers});
			return this.http.get(url, options).map(res => res.json());			
		}

	}
  public getTokenDesktop(){
      if(localStorage.getItem('token') != "undefined"){
        this.token = localStorage.getItem('token');
      }else{
        this.token = null;
      }
       return this.token;
  }
  public async getTokenPhone(){
      let token =  await this.storage.get('token');
      if(token != "null"){
          this.token =  token;
      }else{
          this.token = null
      }
          return this.token;
  }
}
