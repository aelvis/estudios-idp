import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { UsuarioService } from '../../providers/usuario/usuario';
import { RegistroPage } from '../index.paginas';
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
  constructor(public navCtrl: NavController, 
    public navParams: NavParams, 
    private _usu: UsuarioService) {
  }
  ingresar(){
  	this._usu.ingresar(this.correo, this.password).subscribe(()=>{
  	});
  }
  actualizar(nombre, email, celular){
    this._usu.actualizarUsuario(nombre, email, celular);
  }
  register() {
    this.navCtrl.setRoot(RegistroPage);
  }
}
