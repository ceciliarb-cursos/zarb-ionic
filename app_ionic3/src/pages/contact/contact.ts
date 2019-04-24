import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
  slides = [
    {
      title: "Welcome to the Docs!",
      description: "The <b>Ionic Component Documentation</b> showcases a number of useful components that are included out of the box with Ionic.",
      image: "assets/img/ica-slidebox-img-1.png",
    },
    {
      title: "What is Ionic?",
      description: "<b>Ionic Framework</b> is an open source SDK that enables developers to build high quality mobile apps with web technologies like HTML, CSS, and JavaScript.",
      image: "assets/img/ica-slidebox-img-2.png",
    },
    {
      title: "What is Ionic Cloud?",
      description: "The <b>Ionic Cloud</b> is a cloud platform for managing and scaling Ionic apps with integrated services like push notifications, native builds, user auth, and live updating.",
      image: "assets/img/ica-slidebox-img-3.png",
    }
  ];

  pacotes: any = [
    {
      id: 1,
      titulo: 'Rio de Janeiro',
      imagem: 'https://media-cdn.tripadvisor.com/media/photo-s/0b/f0/a2/8a/foto-da-praia-da-urca.jpg',
      descricao: 'Nam aliquet porta porta. Duis volutpat nisl est, sed cursus urna fringilla sed. Duis blandit massa at varius dignissim. Pellentesque nisi quam, aliquet sed nibh eget, congue molestie magna.',
      valor: 900
    },
    {
      id: 2,
      titulo: 'Florianópolis',
      imagem: 'https://portalbr.akamaized.net/brasil/uploads/2018/09/14151550/42k-de-floripa_abre.jpg',
      descricao: 'Nam aliquet porta porta. Duis volutpat nisl est, sed cursus urna fringilla sed. Duis blandit massa at varius dignissim. Pellentesque nisi quam, aliquet sed nibh eget, congue molestie magna.',
      valor: 1200
    },
    {
      id: 3,
      titulo: 'Salvador',
      imagem: 'http://empresasantana.com.br/wp-content/uploads/2016/11/imagem_noticias.jpg',
      descricao: 'Nam aliquet porta porta. Duis volutpat nisl est, sed cursus urna fringilla sed. Duis blandit massa at varius dignissim. Pellentesque nisi quam, aliquet sed nibh eget, congue molestie magna.',
      valor: 2100
    },
    {
      id: 4,
      titulo: 'Fortaleza',
      imagem: 'https://eliteresorts.com.br/blog/wp-content/uploads/praia-do-cumbuco-caucaia-fortaleza.jpg',
      descricao: 'Nam aliquet porta porta. Duis volutpat nisl est, sed cursus urna fringilla sed. Duis blandit massa at varius dignissim. Pellentesque nisi quam, aliquet sed nibh eget, congue molestie magna.',
      valor: 3200
    },
    {
      id: 5,
      titulo: 'Cracovia',
      imagem: 'https://thumbs.web.sapo.io/?epic=ZDE1YZ1P9/ugD4apLmLH6TEg1j9Ybw0Aj1Hb/th8HNNB7t1Br31GYVEweuFmWacMX/Ur/JVo/PpnANlBt2Tcp/f4I+mX6WouD3LTaqX+KovfZ9o=&W=800&H=0&delay_optim=1',
      descricao: 'Cracóvia (em polaco: Kraków; em latim: Cracovia; em alemão: Krakau)[1] é uma cidade da Polônia. Localiza-se no sul do país, nas margens do rio Vístula. Tem cerca de 853 mil habitantes. Uma das cidades mais antigas da Polônia e a segunda maior cidade do país. A capital da Polônia em 1039-1079, 1138-1290 e 1296-1596 (oficialmente até 1795), a principal cidade da coroação dos reis da Polônia e até 1609-1611 a cidade residencial dos reis da Polônia.',
      valor: 5000
    }    
  ]
  constructor(public navCtrl: NavController) {

  }

}
