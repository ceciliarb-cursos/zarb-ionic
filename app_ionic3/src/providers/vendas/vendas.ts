import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

/*
  Generated class for the VendasProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class VendasProvider {

  constructor(public http: HttpClient, public afd: AngularFireDatabase) {
    console.log('Hello VendasProvider Provider');
  }

  addVenda(venda) {
    if (this.afd.list('/vendas/').push(venda)) {
      return this.afd.list('/usuarios-vendas/' + venda.user_id).push(venda);
    }
  }
}
