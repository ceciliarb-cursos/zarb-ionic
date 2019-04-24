import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  titulo: string = "Calculadora";
  op: string = "";
  n1: number = null;
  n2: number = null;
  result: number = 0;
  loader: any;

  constructor(public navCtrl: NavController, public loadingCtrl: LoadingController) {
  }
  
  limpar() {
    this.n1 = this.n2 = this.result = null;
    this.op = null;
  }

  calcular() {
    this.result = 0;
    switch (this.op) {
      case "+":
        this.result = Number(this.n1) + Number(this.n2);
        break;
      case "-":
        this.result = this.n1 - this.n2;
        break;
      case "*":
        this.result = this.n1 * this.n2;
        break;
      case "/":
        this.result = this.n1 / this.n2;
        break;
      default:
        break;
    }
    console.log(`Resultado = ${this.result}`);
  }
}
