import {AfterViewInit, Component} from '@angular/core';
import {IonicPage, MenuController, NavController, Platform} from 'ionic-angular';

import {TranslateService} from '@ngx-translate/core';

export interface Logo {
  image: string;
}

@IonicPage()
@Component({
  selector: 'page-tutorial',
  templateUrl: 'logo.html'
})
export class LogoPage implements AfterViewInit{
  logo: Logo;

  constructor(public navCtrl: NavController, public menu: MenuController, translate: TranslateService, public platform: Platform) {
    this.logo = {
      image: 'assets/img/ica-slidebox-img-1.png'
    };
  }

  ngAfterViewInit(){
    setTimeout( ()=>{
      this.startApp();
    }, 4000)
  }

  startApp() {
    this.navCtrl.setRoot('WelcomePage', {}, {
      animate: true,
      direction: 'forward'
    });
  }

}
