import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { Platform } from 'ionic-angular';
import { URL_SERVICIOS } from '../../config/url.servicios';
import { Storage } from '@ionic/storage';
@Injectable()
export class CursoService {
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
	getFormulario(id_curso,id_etapa,url_formulario,token){
		let url = URL_SERVICIOS + 'usuario/formulario/'+id_curso+"/"+id_etapa+"/"+url_formulario;
		let headers = new Headers({'Content-Type':'application/json','Authorization': this.geToken(JSON.stringify(token))});
		let options = new RequestOptions({headers: headers});
		return this.http.get(url, options).map(res => res.json());
	}

	geToken(token){
		return token;
	}
}
