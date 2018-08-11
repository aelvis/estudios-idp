import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { UsuarioService } from '../../providers/usuario/usuario'
@Component({
  selector: 'page-inicio',
  templateUrl: 'inicio.html',
})
export class InicioPage {
  pet: string = "login";
  correo: string = "";
  password: string = "";
  constructor(public navCtrl: NavController, public navParams: NavParams, private _usu: UsuarioService) {
  }
  ingresar(){
  	this._usu.ingresar(this.correo, this.password).subscribe(()=>{
  	});
  }
}
