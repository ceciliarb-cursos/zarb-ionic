import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DetalhesPage } from '../detalhes/detalhes';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  pacotes: any = [
    {
      id: 1,
      titulo: 'Rio de Janeiro',
      imagem: 'https://media-cdn.tripadvisor.com/media/photo-s/0b/f0/a2/8a/foto-da-praia-da-urca.jpg',
      fotos: [
        { url: 'https://media-cdn.tripadvisor.com/media/photo-s/0b/f0/a2/8a/foto-da-praia-da-urca.jpg'},
        { url: 'http://mangotreehostel.com/wp-content/uploads/2017/05/tours-rio-de-janeiro-mango-tree-hostel-1.jpg'},
        { url: 'https://inassets1-internationsgmbh.netdna-ssl.com/image/static_1280_720/static/bundles/internationsseo/frontend/images/localcommunityHeroV3/98.jpg'}
      ],
      descricao: 'Nam aliquet porta porta. Duis volutpat nisl est, sed cursus urna fringilla sed. Duis blandit massa at varius dignissim. Pellentesque nisi quam, aliquet sed nibh eget, congue molestie magna.',
      valor: 900
    },
    {
      id: 2,
      titulo: 'Florianópolis',
      imagem: 'https://portalbr.akamaized.net/brasil/uploads/2018/09/14151550/42k-de-floripa_abre.jpg',
      fotos: [
        { url: 'https://portalbr.akamaized.net/brasil/uploads/2018/09/14151550/42k-de-floripa_abre.jpg'},
        { url: 'https://www.litoraldesantacatarina.com/imagens/flo_m_01.jpg'},
        { url: 'https://www.redesulhospedagens.com.br/sistema/admin/media/uploads/cidades/ponte-floripa.jpg'}
      ],
      descricao: 'Nam aliquet porta porta. Duis volutpat nisl est, sed cursus urna fringilla sed. Duis blandit massa at varius dignissim. Pellentesque nisi quam, aliquet sed nibh eget, congue molestie magna.',
      valor: 1200
    },
    {
      id: 3,
      titulo: 'Salvador',
      imagem: 'http://empresasantana.com.br/wp-content/uploads/2016/11/imagem_noticias.jpg',
      fotos: [
        { url: 'http://empresasantana.com.br/wp-content/uploads/2016/11/imagem_noticias.jpg'},
        { url: 'https://cdn.zarpo.com.br/media/catalog/product/cache/1/base/640x360/9df78eab33525d08d6e5fb8d27136e95/e/l/elevador-lacerda_bahia_troca-foto-4.jpg'},
        { url: 'https://cdn.zarpo.com.br/media/catalog/product/cache/1/base/640x360/9df78eab33525d08d6e5fb8d27136e95/s/a/salvador_vista-aerea.jpg'}
      ],
      descricao: 'Nam aliquet porta porta. Duis volutpat nisl est, sed cursus urna fringilla sed. Duis blandit massa at varius dignissim. Pellentesque nisi quam, aliquet sed nibh eget, congue molestie magna.',
      valor: 2100
    },
    {
      id: 4,
      titulo: 'Fortaleza',
      imagem: 'https://eliteresorts.com.br/blog/wp-content/uploads/praia-do-cumbuco-caucaia-fortaleza.jpg',
      fotos: [
        { url: 'https://eliteresorts.com.br/blog/wp-content/uploads/praia-do-cumbuco-caucaia-fortaleza.jpg'},
        { url: 'https://www.temporadalivre.com/blog-media/posts/cover/9967/size_800_jericoacoara-tudo-que-voce-precisa-saber-antes-de-viajar-7ee0460b.jpg'},
        { url: 'https://a4.pbase.com/o4/11/141711/1/128561224.5496BXoE.CumbucoCaucaiaCeara__2191_dez2009.jpg'}
      ],
      descricao: 'Nam aliquet porta porta. Duis volutpat nisl est, sed cursus urna fringilla sed. Duis blandit massa at varius dignissim. Pellentesque nisi quam, aliquet sed nibh eget, congue molestie magna.',
      valor: 3200
    },    
    {
      id: 5,
      titulo: 'Cracovia',
      imagem: 'https://thumbs.web.sapo.io/?epic=ZDE1YZ1P9/ugD4apLmLH6TEg1j9Ybw0Aj1Hb/th8HNNB7t1Br31GYVEweuFmWacMX/Ur/JVo/PpnANlBt2Tcp/f4I+mX6WouD3LTaqX+KovfZ9o=&W=800&H=0&delay_optim=1',
      fotos: [
        { url: 'https://thumbs.web.sapo.io/?epic=ZDE1YZ1P9/ugD4apLmLH6TEg1j9Ybw0Aj1Hb/th8HNNB7t1Br31GYVEweuFmWacMX/Ur/JVo/PpnANlBt2Tcp/f4I+mX6WouD3LTaqX+KovfZ9o=&W=800&H=0&delay_optim=1'},
        { url: 'https://www.temporadalivre.com/blog-media/posts/cover/9967/size_800_jericoacoara-tudo-que-voce-precisa-saber-antes-de-viajar-7ee0460b.jpg'},
        { url: 'https://a4.pbase.com/o4/11/141711/1/128561224.5496BXoE.CumbucoCaucaiaCeara__2191_dez2009.jpg'}
      ],
      descricao: 'Cracóvia (em polaco: Kraków; em latim: Cracovia; em alemão: Krakau)[1] é uma cidade da Polônia. Localiza-se no sul do país, nas margens do rio Vístula. Tem cerca de 853 mil habitantes. Uma das cidades mais antigas da Polônia e a segunda maior cidade do país. A capital da Polônia em 1039-1079, 1138-1290 e 1296-1596 (oficialmente até 1795), a principal cidade da coroação dos reis da Polônia e até 1609-1611 a cidade residencial dos reis da Polônia.',
      valor: 5000
    }    
  ]
  
  constructor(public navCtrl: NavController) {

  }

  abreDetalhes(pacote) {
    // this.navCtrl.setRoot(DetalhesPage);
    this.navCtrl.push(DetalhesPage, { pacote: pacote, modo: 'buy' });
  }
}
