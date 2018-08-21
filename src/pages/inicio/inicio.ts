import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { UsuarioService } from '../../providers/usuario/usuario';
import { RegistroPage, UsuarioEditPage } from '../index.paginas';
import { HomePage } from '../home/home';
@Component({
  selector: 'page-inicio',
  templateUrl: 'inicio.html',
})
export class InicioPage {
  pet: string = "login";
  correo: string = "";
  password: string = "";
  nombre: string;
  email: string;
  celular: string;
  constructor(public navCtrl: NavController, public navParams: NavParams, public _usu: UsuarioService) {
  }
  ionViewWillEnter(){
    if(this._usu.identity == null){
    this.nombre = null;
    this.email = null;
    this.celular = null;
    }else{
    this.nombre = this._usu.identity.nombre;
    this.email = this._usu.identity.correo;
    this.celular = this._usu.identity.celular;
    }

  }
  ingresar(){
  	this._usu.ingresar(this.correo, this.password).subscribe(()=>{
      if(this._usu.token != null){
          this.navCtrl.push(HomePage);
      }else{

      }
  	});
  }
  actualizar(nombre, email, celular){
    this._usu.actualizarUsuario(nombre, email, celular);
  }
  register() {
    this.navCtrl.setRoot(RegistroPage);
  }
  recuperar(){
    this.navCtrl.setRoot(UsuarioEditPage);
  }
  cerrar(){
    this._usu.token = null;
    this._usu.identity = null;
    this.nombre = null;
    this.email = null;
    this.celular = null;
    this._usu.guardar_session_token();
    this._usu.guardar_session_identity();
  }
}
