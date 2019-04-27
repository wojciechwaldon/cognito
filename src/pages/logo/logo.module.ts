import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LogoPage } from './logo';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    LogoPage,
  ],
  imports: [
    IonicPageModule.forChild(LogoPage),
    TranslateModule.forChild()
  ],
  exports: [
    LogoPage
  ]
})
export class LogoPageModule { }
