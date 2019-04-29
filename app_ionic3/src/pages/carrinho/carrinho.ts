import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';

/**
 * Generated class for the CarrinhoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-carrinho',
  templateUrl: 'carrinho.html',
})
export class CarrinhoPage {
  carrinho: any = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public toastCtrl: ToastController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CarrinhoPage');
  }
  ionViewWillEnter() {
    this.carrinho = localStorage.getItem('carrinho') ? JSON.parse(localStorage.getItem('carrinho')) : [];
  }

  excluir(id) {
    const carrinho = this.carrinho.map(item => { if (item.pacote.id == id) item.qtd--; return item }).filter(item => item.qtd > 0);
    this.carrinho = carrinho;
    localStorage.setItem('carrinho', JSON.stringify(this.carrinho));
    const msg = this.toastCtrl.create({
      message: `Pacote removido com sucesso!`,
      duration: 2000
    });
    msg.present()

  }

}
