import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { CursoService } from '../../providers/curso/curso'
import { ListadoCursoIdUrlLeccionPage } from '../index.paginas';
@Component({
  selector: 'page-listado-curso-id-url',
  templateUrl: 'listado-curso-id-url.html',
})
export class ListadoCursoIdUrlPage {
  lec: string = "inicio";
  listadoCursoIdUrlLeccionPage = ListadoCursoIdUrlLeccionPage;
  lec_one:any[] = [];
  cont:any[] = [];
  a:any[] = [];
  b:any[] = [];
  constructor(public navCtrl: NavController, public navParams: NavParams, private _cs: CursoService) {
  }
  ionViewWillEnter(){
  	this._cs.getListadoCursosIdUrlLeccion(this.navParams.get("curso"),this.navParams.get("id"),this.navParams.get("url")).subscribe( 
	  		data => { 
	  			if(data.error){
				}else{
	  				this.lec_one = data.lec;
	  				this.cont = data.cont;
	  				this.a = data.curso;
	  				this.b = data.etapa;
	  			}
		} );
  }
}
