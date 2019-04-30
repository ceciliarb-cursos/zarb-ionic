import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { VendasProvider } from '../../providers/vendas/vendas';
import { HomePage } from '../home/home';

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
  user: any;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams, 
              public toastCtrl: ToastController,
              public vendasService: VendasProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CarrinhoPage');
  }
  ionViewWillEnter() {
    this.carrinho = localStorage.getItem('carrinho') ? JSON.parse(localStorage.getItem('carrinho')) : [];
    this.user = JSON.parse(localStorage.getItem('user'));

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

  finalizar() {
    const venda_obj = {
      user_id: this.user.id,
      data: JSON.stringify(new Date()),
      pacotes: this.carrinho,
    }
    if(this.vendasService.addVenda(venda_obj)) {
      const msg = this.toastCtrl.create({
        message: 'Compra realizada com sucesso!',
        duration: 2000
      });
      msg.present();
      localStorage.removeItem('carrinho');
      this.carrinho = null;
      this.navCtrl.setRoot(HomePage);
    }
  }

}
