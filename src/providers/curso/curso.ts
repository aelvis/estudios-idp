import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import { URL_SERVICIOS } from '../../config/url.servicios';
@Injectable()
export class CursoService {
  cont_lec_lista:any[] = [];
  form_datos:any[] = [];
  constructor(public http: Http) {
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
		this.http.get(url).map(res => res.json()).subscribe( 
	  		data => { 
	  			if(data.error){
				}else{
	  				this.cont_lec_lista = data.cont;
	  			}
		} );
	}
	getFormulario(id_curso,id_etapa,url_formulario){
		let url = URL_SERVICIOS + 'usuario/formularioIonic/'+id_curso+"/"+id_etapa+"/"+url_formulario;
		this.http.get(url).map(res => res.json()).subscribe( 
	  		data => { 
	  			if(data.error){
				}else{
	  				this.form_datos = data.datos;
	  				console.log(this.form_datos);
	  			}
		} );
	}
}
