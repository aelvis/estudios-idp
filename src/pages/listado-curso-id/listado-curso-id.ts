import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { CursoService } from '../../providers/curso/curso'
import { ListadoCursoIdUrlPage, FormularioPage } from '../index.paginas';
import { Platform } from 'ionic-angular';
import { Storage } from '@ionic/storage';

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
  token;
  identity;
  constructor(private platform: Platform, private storage: Storage,public navCtrl: NavController, public navParams: NavParams, private _cs: CursoService) {
  }
  public async getToken(){
    if(this.platform.is("cordova")){
      if(this.storage.get('token')){
          this.token =  await this.storage.get('token');
      }else{
          this.token = null
      }
      return this.token;
    }else{
      if(localStorage.getItem('token')){
        this.token = localStorage.getItem('token');
      }else{
        this.token = null;
      }
       return this.token;
    }
   
  }
  ionViewWillEnter(){
    this.getToken();
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
