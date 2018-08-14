import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CursoService } from '../../providers/curso/curso';
import { CursoPage } from '../index.paginas';
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
  token;
  identity;
  constructor(public navCtrl: NavController, private _cs: CursoService, private _usu: UsuarioService) {
  }
  ionViewWillEnter(){
    this._cs.getCursos().subscribe(
      data => { 
          if(data.error){
        }else{
            //let nuevaData = this.agrupar(data.curso, 2);
            this.cursos =  data.curso;
            this.cursosprueba  = data.curso;
            this.total = data.total.id;
          }
        }  
    );
  }
  /*private agrupar( arr: any, tamano: number){
      let nuevoArreglo = [];
      for( let i = 0; i<arr.length; i+=tamano){
        nuevoArreglo.push(arr.slice(i, i+tamano));
      }
      return nuevoArreglo;
    }*/
}
