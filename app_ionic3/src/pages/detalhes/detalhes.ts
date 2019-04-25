import { Component, Input } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

/**
 * Generated class for the DetalhesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detalhes',
  templateUrl: 'detalhes.html',
})
export class DetalhesPage {
  pacote: any = null;
  modo: any = 'show';

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController, public toastCtrl: ToastController) {
    this.pacote = this.navParams.get('pacote');
    this.modo = this.navParams.get('modo') || 'show';
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetalhesPage');
  }

  comprar() {
    const confirm = this.alertCtrl.create({
      title: 'Inserir no carrinho?',
      message: `Desejar inserir a viagem "${this.pacote.titulo}" no seu carrinho?`,
      buttons: [
        {
          text: 'Não',
          handler: () => {
            console.log('Disagree clicked');
          }
        },
        {
          text: 'Sim',
          handler: () => {
            let carrinhoStr = localStorage.getItem('carrinho');
            let carrinho = carrinhoStr ? JSON.parse(carrinhoStr) : [];
            const pacoteCorrente = carrinho.filter(item => (item.pacote.titulo === this.pacote.titulo));
            if (!pacoteCorrente.length) {
              let objPacote = { qtd: 1, pacote: this.pacote }
              carrinho.push(objPacote);
            } else {
              pacoteCorrente[0].qtd++;
            }
            localStorage.setItem('carrinho', JSON.stringify(carrinho));
            this.presentToast();
            console.log('Agree clicked');
          }
        }
      ]
    });
    confirm.present();
  }

  presentToast() {
    const toast = this.toastCtrl.create({
      message: `Viagem "${this.pacote.titulo}" inserida no carrinho.`,
      duration: 3000
    });
    toast.present();
  }
}
