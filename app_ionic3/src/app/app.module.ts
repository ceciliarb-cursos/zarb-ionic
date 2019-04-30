import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import {AngularFireModule} from "angularfire2";
import {AngularFireAuthModule} from "angularfire2/auth";
import { AngularFireDatabaseModule } from "angularfire2/database";

import { HomePage } from '../pages/home/home';
import { AcessoPage } from '../pages/acesso/acesso';
import { CarrinhoPage } from '../pages/carrinho/carrinho';
import { DetalhesPage } from '../pages/detalhes/detalhes';

import { TabsPage } from '../pages/tabs/tabs';
import { AboutPage } from '../pages/about/about';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { CalculadoraPage } from '../pages/calculadora/calculadora';
import { LoginPage } from '../pages/login/login';
import { CadastroPage } from '../pages/cadastro/cadastro';
import { ComprasPage } from '../pages/compras/compras';

import { UsuariosProvider } from '../providers/usuarios/usuarios';
import { VendasProvider } from '../providers/vendas/vendas';


export const firebaseConfig = {
  apiKey: "AIzaSyCVRtElRuOTMq77A_2gdrTBq6eA4qasVxY",
  authDomain: "zarb-curso-ionic.firebaseapp.com",
  databaseURL: "https://zarb-curso-ionic.firebaseio.com",
  projectId: "zarb-curso-ionic",
  storageBucket: "zarb-curso-ionic.appspot.com",
  messagingSenderId: "52415709918"
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    CarrinhoPage,
    AcessoPage,
    LoginPage,
    CadastroPage,
    ComprasPage,
    DetalhesPage,
    AboutPage,
    CalculadoraPage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    //Set the root app component for you IonicModule
    IonicModule.forRoot(MyApp),
    //inicializado o firebase
    AngularFireModule.initializeApp(firebaseConfig),
    //inicializado o OAuth do firebase
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    CarrinhoPage,
    AcessoPage,
    LoginPage,
    CadastroPage,
    ComprasPage,
    DetalhesPage,
    AboutPage,
    CalculadoraPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    UsuariosProvider,
    VendasProvider
  ]
})
export class AppModule {}
