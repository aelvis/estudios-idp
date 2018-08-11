import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';
import { CursoService } from '../../providers/curso/curso'
import { ListadoCursoIdPage } from '../index.paginas';
@Component({
  selector: 'page-curso',
  templateUrl: 'curso.html',
})
export class CursoPage {
  listadoCursoIdPage = ListadoCursoIdPage;
  pet: string = "inicio";
  listaCurso:any[] = [];
  listaCurso_one:any[] = [];
  constructor(public navCtrl: NavController, public navParams: NavParams, private _cs: CursoService) {
  	
  }
  ionViewWillEnter(){
  	this._cs.getListadoCursosId(this.navParams.get("curso")).subscribe( 
        data => { 
          if(data.error){
        }else{
            this.listaCurso = data.cursos;
            this.listaCurso_one = data.listado;
          }
        } );
  }
}
