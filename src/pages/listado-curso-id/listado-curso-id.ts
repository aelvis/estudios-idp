import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { CursoService } from '../../providers/curso/curso'
import { ListadoCursoIdUrlPage, FormularioPage } from '../index.paginas';


@Component({
  selector: 'page-listado-curso-id',
  templateUrl: 'listado-curso-id.html',
})
export class ListadoCursoIdPage {
  lec: string = "inicio";
  listadoCursoIdUrlLeccionPage = ListadoCursoIdUrlPage;
  formularioPage = FormularioPage;
  etapa_curso:any[] = [];
  etapa:any[] = [];
  leccion:any[] = [];
  formularios:any[] = [];
  constructor(public navCtrl: NavController, public navParams: NavParams, private _cs: CursoService) {
  }
  
  ionViewWillEnter(){
  	this._cs.getListadoCursosIdUrl(this.navParams.get("curso"),this.navParams.get("id")).subscribe( 
        data => { 
          if(data.error){
        }else{
          this.etapa_curso = data.curso;
            this.etapa = data.etapa;
            this.leccion = data.leccion;
            this.formularios = data.formulario;
          }
    });
  }
}
