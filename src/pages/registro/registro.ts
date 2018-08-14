import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { InicioPage } from '../index.paginas';
import { UsuarioService } from '../../providers/usuario/usuario';
import { AlertController } from 'ionic-angular';
@Component({
  selector: 'page-registro',
  templateUrl: 'registro.html',
})
export class RegistroPage {
	nombre: string = "";
	correo: string = "";
	password: string = "";
	celular: string = "";
	codigo: string = "";
  constructor(private _usu: UsuarioService, private alertCtrl: AlertController,public navCtrl: NavController, public navParams: NavParams) {
  }

  login(){
  	this.navCtrl.setRoot(InicioPage);
  }
  register(){
	this._usu.register(this.nombre,this.correo, this.password, this.celular, this.codigo).subscribe(              
      data => { 
        if(data.error){
          this.alertCtrl.create({
            title:"Error al Iniciar",
            subTitle: data.error.msg,
            buttons: ["OK"]
          }).present();
        }else{
          this.navCtrl.setRoot(InicioPage);
        }
              });
  }
}
