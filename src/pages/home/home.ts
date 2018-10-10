import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CursoService } from '../../providers/curso/curso';
import { CursoPage, AlumnosPage, AdminTeacherPage } from '../index.paginas';
import { UsuarioService } from '../../providers/usuario/usuario';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
	cursoPage = CursoPage;
  cursos:any[] = [];
  cursosprueba:any[] = [];
  total:any[] = [];
  alumnosPage = AlumnosPage;
  admin = AdminTeacherPage;
  role;
  constructor(public _usu: UsuarioService,public navCtrl: NavController, private _cs: CursoService) {
  }
  ionViewWillEnter(){
    if(this._usu.identity == null){
      this.role="jojo";
    }else{
      this.role=this._usu.identity.role;
    }
    this._cs.getCursos().subscribe(
      data => { 
          if(data.error){
        }else{
            this.cursos =  data.curso;
          }
        }  
    );
  }
}
