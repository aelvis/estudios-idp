import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { CursoService } from '../../providers/curso/curso';
import { IglesiaPage, TeacherUsuarioPage, AlumnosPage } from '../index.paginas';

@Component({
  selector: 'page-admin-teacher',
  templateUrl: 'admin-teacher.html',
})
export class AdminTeacherPage {
	  iglesia = IglesiaPage;
    update = TeacherUsuarioPage;
    alumnos = AlumnosPage;
  constructor(public navCtrl: NavController, public navParams: NavParams, private _cs: CursoService) {
  }
  ionViewWillEnter(){
  }
}
