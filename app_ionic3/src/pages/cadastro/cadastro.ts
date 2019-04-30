import { Component } from '@angular/core';
import { NavController, NavParams, ToastController } from 'ionic-angular';
import {AngularFireAuth} from 'angularfire2/auth';
import { UsuariosProvider } from '../../providers/usuarios/usuarios';

/**
 * Generated class for the CadastroPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-cadastro',
  templateUrl: 'cadastro.html',
})
export class CadastroPage {
  nome: string;
  telefone: string;
  cpf: string;
  email: string;
  senha: string;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams, 
              public firebaseAuth: AngularFireAuth, 
              public toastCtrl: ToastController,
              public usuarioService: UsuariosProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CadastroPage');
  }

  cadastrarUsuario() {
    this.firebaseAuth.auth.createUserWithEmailAndPassword(this.email, this.senha)
    .then((user) => {
      let obj_user = {
        id: user.uid,
        nome: this.nome,
        telefone: this.telefone,
        cpf: this.cpf,
        email: this.email,
      };
      if(this.usuarioService.addUsuario(obj_user)) {
        const msg = this.toastCtrl.create({
          message: `Cadastro realizado com sucesso!`,
          duration: 2000
        });
        msg.present();
        this.navCtrl.pop();

      }

    })
    .catch(e => {
      console.log(e);
      const msg = this.toastCtrl.create({
        message: e,
        duration: 3000
      });
      msg.present();
    })
    console.log(this.email, this.senha);
  }
}
