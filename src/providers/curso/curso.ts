import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, URLSearchParams } from '@angular/http';
import 'rxjs/add/operator/map';
import { Platform } from 'ionic-angular';
import { URL_SERVICIOS } from '../../config/url.servicios';
import { Storage } from '@ionic/storage';

@Injectable()
export class CursoService {
  token;
  datos:any[] = [];
  formulario:any[] = [];
  curso:any[] = [];
  etapa:any[] = [];
  pregunta:any[] = [];
  respuesta:any[] = [];
  pregunta_id:any[] = [];
  curso_id:any[] = [];
  etapa_id:any[] = [];
  formulario_id:any[] = [];
  respuesta_pregunta:any[] = [];
  mensaje_pregunta:any[] = [];
  itemsd_id: string = "true";
  constructor(public http: Http, private platform: Platform, private storage: Storage) {
  }
    getTokenDesktop(){
	    if(localStorage.getItem('token') != "undefined"){
	        this.token = localStorage.getItem('token');
	    }else{
	        this.token = null;
	    }
	    return this.token;
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
			this.storage.get("token").then((token) => {
				let headers = new Headers({
					'Content-Type':'application/json',
					'Authorization': token});
				let options = new RequestOptions({headers: headers});
				return this.http.get(url, options).map(res => res.json()).subscribe( 
			        data => { 
			          if(data.error){
			        }else{
				        this.datos = data.datos;
				        this.formulario = data.formulario;
				        this.curso = data.curso.url_curso;
				        this.etapa = data.etapa.url_etapa_curso;
			        }
			    });  
	  		});
		}else{
			let headers = new Headers({'Content-Type':'application/json','Authorization': this.getTokenDesktop()});
			let options = new RequestOptions({headers: headers});
			return this.http.get(url, options).map(res => res.json()).subscribe( 
		        data => { 
		        if(data.error){
			    }else{
			        this.datos = data.datos;
			        this.formulario = data.formulario;
			        this.curso = data.curso.url_curso;
			        this.etapa = data.etapa.url_etapa_curso;
			    }
    		}); 			
		}
	}
	getRespuestaVer(id_curso,id_etapa,url_formulario,id_formulario){
		let url = URL_SERVICIOS + 'usuario/formularioIdRespuesta/'+id_curso+"/"+id_etapa+"/"+url_formulario+"/"+id_formulario;
		if(this.platform.is("cordova")){
			console.log(url);
			this.storage.get("token").then((token) => {
				let headers = new Headers({'Content-Type':'application/json','Authorization': token});
				let options = new RequestOptions({headers: headers});
				return this.http.get(url, options).map(res => res.json()).subscribe( 
			        data => { 
			          if(data.error){
			        	}else{
			            	this.pregunta = data.pregunta;
			        		this.respuesta = data.respuesta;
			          }
			    });  
	  		});
		}else{
			let headers = new Headers({'Content-Type':'application/json','Authorization': this.getTokenDesktop()});
			let options = new RequestOptions({headers: headers});
			return this.http.get(url, options).map(res => res.json()).subscribe( 
		        data => { 
		        if(data.error){
			    }else{
			        this.pregunta = data.pregunta;
			        this.respuesta = data.respuesta;
			    }
    		}); 
		}
	}
	getRespuesta(id_curso,id_etapa,url_formulario,id_formulario){
		let url = URL_SERVICIOS + 'usuario/formularioId/'+id_curso+"/"+id_etapa+"/"+url_formulario+"/"+id_formulario;
		if(this.platform.is("cordova")){
			this.storage.get("token").then((token) => {
				let headers = new Headers({'Content-Type':'application/json','Authorization': token});
				let options = new RequestOptions({headers: headers});
				return this.http.get(url, options).map(res => res.json()).subscribe( 
			        data => { 
			          if(data.error){
			        	}else{
			            this.pregunta_id = data.pregunta;
			       this.curso_id = data.curso;
			       this.etapa_id = data.etapa;
			       this.formulario_id = data.formulario;
			       this.itemsd_id  = "true";
			          }
			    });  
	  		});
		}else{
			let headers = new Headers({'Content-Type':'application/json','Authorization': this.getTokenDesktop()});
			let options = new RequestOptions({headers: headers});
			return this.http.get(url, options).map(res => res.json()).subscribe( 
		        data => { 
		        if(data.error){
			    }else{
			       this.pregunta_id = data.pregunta;
			       this.curso_id = data.curso;
			       this.etapa_id = data.etapa;
			       this.formulario_id = data.formulario;
			       this.itemsd_id  = "true";
			    }
    		}); 
		}
	}
	register(descripcion:string,id_curso:string,id_etapa:string,url_formulario:string,id_formulario:string){
		let url = URL_SERVICIOS + 'usuario/registroPreguntaIonic/'+id_curso+"/"+id_etapa+"/"+url_formulario+"/"+id_formulario;
		let datas = new URLSearchParams();
  		datas.append("descripcion", descripcion);
		if(this.platform.is("cordova")){
			this.storage.get("token").then((token) => {
				let headers = new Headers({'Content-Type':'application/json','Authorization': token});
				let options = new RequestOptions({headers: headers});
				return this.http.post(url, datas, options).map(res => res.json()).subscribe( 
		        data => { 
		        if(data.error){
			    }else{
			    	if(data.codigo = 'success'){
						this.respuesta_pregunta = data.codigo;
			       		this.mensaje_pregunta = data.msg;
			       		this.itemsd_id  = "false";
			    	}else{
			    		this.respuesta_pregunta = data.codigo;
			       		this.mensaje_pregunta = data.msg;
			    	}
			    }
    		}); 
	  		});
		}else{
			let headers = new Headers({'Content-Type':'application/json','Authorization': this.getTokenDesktop()});
			let options = new RequestOptions({headers: headers});
			return this.http.post(url, datas, options).map(res => res.json()).subscribe( 
		        data => { 
		        if(data.error){
			    }else{
			    	if(data.codigo = 'success'){
						this.respuesta_pregunta = data.codigo;
			       		this.mensaje_pregunta = data.msg;
			       		this.itemsd_id  = "false";
			    	}else{
			    		this.respuesta_pregunta = data.codigo;
			       		this.mensaje_pregunta = data.msg;
			    	}
			    }
    		}); 
		}
	}
}
