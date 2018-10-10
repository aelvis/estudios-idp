import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { CursoService } from '../../providers/curso/curso';
import { UsuarioPage } from '../index.paginas';

@Component({
  selector: 'page-teacher-usuario',
  templateUrl: 'teacher-usuario.html',
})
export class TeacherUsuarioPage {
  constructor(public navCtrl: NavController, public navParams: NavParams, private _cs: CursoService) {
  }
  ionViewWillEnter(){
  }
}
