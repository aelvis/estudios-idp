import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import { URL_SERVICIOS } from '../../config/url.servicios';
@Injectable()
export class CursoService {
  cursos:any[] = [];
  cursosprueba:any[] = [];
  listaCurso:any[] = [];
  listaCurso_one:any[] = [];
  total:number;
  pagina:number= 0;
  etapa:any[] = [];
  leccion:any[] = [];
  formularios:any[] = [];
  constructor(public http: Http) {
  }
    getCursos(){
  		let promesa = new Promise( (resolve, reject) => {
	  	let url = URL_SERVICIOS + 'usuario/listadoCursosIonic/'+this.pagina;
	  	this.http.get(url).map(res => res.json()).subscribe( 
	  		data => { 
	  			if(data.error){
				}else{
	  				let nuevaData = this.agrupar(data.curso, 2);
	  				this.cursos.push( ...nuevaData);
	  				this.cursosprueba.push( ...data.curso);
	  				this.total = data.total.id;
	  				this.pagina +=1;
	  			}
	  			resolve();
	  		} );
  		});	
  		return promesa;
	}
    private agrupar( arr: any, tamano: number){
  		let nuevoArreglo = [];
	  	for( let i = 0; i<arr.length; i+=tamano){
	  		nuevoArreglo.push(arr.slice(i, i+tamano));
	  	}
  		return nuevoArreglo;
  	}
  	getListadoCursosId(id_curso){
	  	let url = URL_SERVICIOS + 'usuario/listadoCursosIdIonic/'+id_curso;
	  	this.http.get(url).map(res => res.json()).subscribe( 
	  		data => { 
	  			if(data.error){
				}else{
	  				this.listaCurso = data.cursos;
	  				this.listaCurso_one = data.listado;
	  			}
	  		} );
	}
	getListadoCursosIdUrl(id_curso,id_etapa){
		let url = URL_SERVICIOS + 'usuario/listadoCursosIdUrlIonic/'+id_curso+"/"+id_etapa;
	  	this.http.get(url).map(res => res.json()).subscribe( 
	  		data => { 
	  			if(data.error){
				}else{
	  				this.etapa = data.etapa;
	  				this.leccion = data.leccion;
	  				this.formularios = data.formulario;
	  			}
	  		} );
	}



}
