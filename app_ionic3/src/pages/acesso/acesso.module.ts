import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AcessoPage } from './acesso';

@NgModule({
  declarations: [
    AcessoPage,
  ],
  imports: [
    IonicPageModule.forChild(AcessoPage),
  ],
})
export class AcessoPageModule {}
