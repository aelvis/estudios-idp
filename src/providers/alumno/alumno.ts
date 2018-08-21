import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { Http, Headers, RequestOptions, URLSearchParams } from '@angular/http';
import 'rxjs/add/operator/map';
import { Platform } from 'ionic-angular';
import { URL_SERVICIOS } from '../../config/url.servicios';
import { Storage } from '@ionic/storage';
import { UsuarioService } from '../index.services';
@Injectable()
export class AlumnoService {
  token;
  datos:any[] = [];
  data:any[] = [];
  url_usuario_enviar:any[] = [];
  data_ver:any[] = [];
  url_usuario_enviar_ver:any[] = [];
  url_formulario_enviar_ver:any[] = [];
  data_ver_id:any[] = [];
  url_usuario_enviar_ver_id:any[] = [];
  url_formulario_enviar_ver_id:any[] = [];
  cod:any[] = [];
  mensaje:any[] = [];
  id_respuesta_formulario:any[] = [];
  itemsd_id: string = "true";
  constructor( public _usu:UsuarioService ,public http: Http, private platform: Platform, private storage: Storage) {
  }
	getListaAlumnos(){
			let headers = new Headers({'Content-Type':'application/json','Authorization': this._usu.token});
			let options = new RequestOptions({headers: headers});
			return this.http.get(URL_SERVICIOS+'alumnos/listadoAlumnos', options).map(res => res.json()).subscribe(
				obtener => {
			  		if(obtener.dato){
			  			this.datos = obtener.dato;
			  		}else{

			  		}
			  	});  
	}
	getListaAlumnosFormulario(url_usuario){
			let headers = new Headers({'Content-Type':'application/json','Authorization': this._usu.token});
			let options = new RequestOptions({headers: headers});
			return this.http.get(URL_SERVICIOS+'alumnos/listadoAlumnosFormulario', options).map(res => res.json()).subscribe(
				obtener => {
					if(!obtener.dato){
									}else{
										this.data = obtener.dato;
										this.url_usuario_enviar = url_usuario;
									}
				});
	}
	getListaAlumnosFormularioVer(url_formulario,url_usuario){
		let headers = new Headers({'Content-Type':'application/json','Authorization': this._usu.token});
		let options = new RequestOptions({headers: headers});
		return this.http.get(URL_SERVICIOS+'alumnos/listadoAlumnosFormularioVer/'+url_formulario+'/'+url_usuario, options).map(res => res.json()).subscribe(
				obtener => {
					if(!obtener.dato){
					}else{
						this.data_ver = obtener.dato;
						this.url_usuario_enviar_ver = url_usuario;
						this.url_formulario_enviar_ver = url_formulario;
					}
				}); 
	}
	getListaAlumnosFormularioVerId(url_formulario,url_usuario,id_respuesta_formulario){
		let headers = new Headers({'Content-Type':'application/json','Authorization': this._usu.token});
		let options = new RequestOptions({headers: headers});
		return this.http.get(URL_SERVICIOS+'alumnos/listadoAlumnosFormularioVerId/'+url_formulario+'/'+url_usuario+'/'+id_respuesta_formulario, options).map(res => res.json()).subscribe(
				obtener => {
					if(!obtener.dato){
					}else{
						this.cod = url_formulario;
						this.itemsd_id  = "true";
						this.data_ver_id = obtener.dato;
						this.url_usuario_enviar_ver_id = url_usuario;
						this.url_formulario_enviar_ver_id = url_formulario;
						this.id_respuesta_formulario = id_respuesta_formulario;
					}
				}); 
	}
	actualizarRespuesta(informe:string,nota:string,url_formulario,url_usuario,id_respuesta_formulario){
		let url = URL_SERVICIOS + 'alumnos/actualizarRespuestaFormulario/'+url_formulario+'/'+url_usuario+'/'+id_respuesta_formulario;
		let datas = new URLSearchParams();
  		datas.append("informe", informe);
  		datas.append("nota", nota);
		let headers = new Headers({'Content-Type':'application/json','Authorization': this._usu.token});
		return this.http.post(url, datas, {headers: headers}).map(res => res.json()).subscribe(
				obtener => {
					if(obtener.mensaje.codigo == 'success'){
						this.cod = obtener.mensaje.codigo;
					    this.mensaje = obtener.mensaje.msg;
					    this.itemsd_id  = "false";
					}else{
						this.cod = obtener.mensaje.codigo;
					    this.mensaje = obtener.mensaje.msg;
					}
				});
	}
}
