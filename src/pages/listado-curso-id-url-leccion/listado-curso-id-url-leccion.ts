import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { CursoService } from '../../providers/curso/curso'
@Component({
  selector: 'page-listado-curso-id-url-leccion',
  templateUrl: 'listado-curso-id-url-leccion.html',
})
export class ListadoCursoIdUrlLeccionPage {
  lec: string = "inicio";
  cont_lec_lista:any[] = [];
  constructor(public navCtrl: NavController, public navParams: NavParams, private _cs: CursoService) {
  }
  ionViewWillEnter(){
  	this._cs.getListadoCursosIdUrlLeccionLista(this.navParams.get("curso"),this.navParams.get("id"),this.navParams.get("url"),this.navParams.get("thow")).subscribe( 
	  		data => { 
	  			if(data.error){
				}else{
	  				this.cont_lec_lista = data.cont;
	  			}
		} );
  }
}
