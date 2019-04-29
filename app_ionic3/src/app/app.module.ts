import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

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
import { AngularFireModule } from "angularfire2";
import { AngularFireAuthModule } from "angularfire2/auth";
import { ComprasPage } from '../pages/compras/compras';

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
    AngularFireAuthModule
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
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
