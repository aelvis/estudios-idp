import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CursoService } from '../../providers/curso/curso';

import { CursoPage } from '../index.paginas';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
	cursoPage = CursoPage;
  
  constructor(public navCtrl: NavController, private _cs: CursoService) {

  }
  ionViewWillEnter(){
  	this._cs.getCursos();
  }
  siguiente_pagina(infiniteScroll){
  	this._cs.getCursos().then(()=>{
  		infiniteScroll.complete();
  	});
  }
}
