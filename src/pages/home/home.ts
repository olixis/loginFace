import { Component } from '@angular/core';
import { FacebookService } from '../../providers/facebook'
import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public alertCtrl: AlertController,public navCtrl: NavController, public facebook: FacebookService) {
    
  }
  public logar(): void{
    this.facebook.login().then(result => {this.alertCtrl.create({
            title: 'Login com sucesso!',
            subTitle: result.status,
            buttons: ['Ok']
    }).present()}).catch(error => {this.alertCtrl.create({
            title: 'Login error',
            subTitle: error,
            buttons: ['Ok']
    }).present()});
  }

}
