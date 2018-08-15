import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CursoService } from '../../providers/curso/curso';
import { CursoPage, AlumnosPage } from '../index.paginas';
import { UsuarioService } from '../../providers/usuario/usuario';
import { Platform } from 'ionic-angular';
import { Storage } from '@ionic/storage';
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
  constructor(public navCtrl: NavController, private _cs: CursoService, private _usu: UsuarioService,private storage: Storage, private platform: Platform) {
  }
  ionViewWillEnter(){
    console.log(this._usu.identity.role);
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
