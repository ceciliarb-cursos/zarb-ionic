import { Component } from '@angular/core';

// import { AboutPage } from '../about/about';
// import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { CarrinhoPage } from '../carrinho/carrinho';
import { AcessoPage } from '../acesso/acesso';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = CarrinhoPage;
  tab3Root = AcessoPage;

  constructor() {

  }
}
