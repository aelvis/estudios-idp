import { Component } from '@angular/core';
import { AlertController, NavController, NavParams } from 'ionic-angular';
import { UsuarioService } from '../../providers/usuario/usuario';
import { InicioPage } from '../../pages/index.paginas';
@Component({
  selector: 'page-usuario-edit',
  templateUrl: 'usuario-edit.html',
})
export class UsuarioEditPage {
  correo:string = "";
  cod:string = "";
  email = true;
  codigo = null;
  password = null;
  contr:string = "";
  constructor(public _usu: UsuarioService, private alertCtrl: AlertController,public navCtrl: NavController, public navParams: NavParams) {
  }
  agregar_email(correo){
  	this._usu.update_password(correo).subscribe(
  		data => {
  			if(data.cod === 'danger'){
		          this.alertCtrl.create({
		            title:"Email Error",
		            subTitle: data.msg,
		            buttons: ["OK"]
		          }).present();
  			}else{
  				this.email = false;
  				this.codigo = true;
  			}
  		});
  }
  agregar_codigo(cod){
  	this._usu.update_codigo(cod).subscribe(
  		data => {
  			if(data.cod === 'danger'){
		          this.alertCtrl.create({
		            title:"Error Código",
		            subTitle: data.msg,
		            buttons: ["OK"]
		          }).present();
  			}else{
  				this.codigo = false;
  				this.password = true;
  			}
  		});
  }
  actualizar_password(correo,contr){
  	this._usu.update_co(correo,contr).subscribe(
  		data => {
  			if(data.cod === 'danger'){
		          this.alertCtrl.create({
		            title:"Error Password",
		            subTitle: data.msg,
		            buttons: ["OK"]
		          }).present();

  			}else{
  				this.codigo = false;
  				this.password = false;
  				this.email = true;
  				this.navCtrl.setRoot(InicioPage);
  			}
  		});
  }
}
