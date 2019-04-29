import { Component } from '@angular/core';
import { NavController, NavParams, ToastController } from 'ionic-angular';
import { CadastroPage } from '../cadastro/cadastro';
import { AngularFireAuth } from 'angularfire2/auth';
import { ComprasPage } from '../compras/compras';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  email: string;
  senha: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public toastCtrl: ToastController, public firebaseAuth: AngularFireAuth) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  ionViewWillEnter() {
    if(this.isLogged()) {
      this.navCtrl.setRoot(ComprasPage);
    }
  }

  isLogged() {
    return !!localStorage.getItem('user');
  }

  abreCadastro() {
    this.navCtrl.push(CadastroPage);
  }

  autenticaUsuario() {
    this.firebaseAuth.auth.signInWithEmailAndPassword(this.email, this.senha)
    .then( resp => {
      console.log(resp);
      const msg = this.toastCtrl.create({
        message: "Usuario autenticado",
        duration: 1000
      });
      msg.present();
      const obj_user = {
        id: resp.user.uid,
        email: resp.user.email,
      };
      localStorage.setItem('user', JSON.stringify(obj_user));
      this.navCtrl.setRoot(ComprasPage);
    })
    .catch( e => {
      console.log(e);
      const msg = this.toastCtrl.create({
        message: e,
        duration: 3000
      });
      msg.present();
    })
  }
}
