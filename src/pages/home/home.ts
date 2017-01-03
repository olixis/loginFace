import { Component } from '@angular/core';
import { FacebookService } from '../../providers/facebook'
import { NavController, AlertController } from 'ionic-angular';
import { UserPage } from "../user/user"


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public alertCtrl: AlertController,public navCtrl: NavController, public facebook: FacebookService) {
    facebook.getLoginStatus().then( res => {res.status === 'connected' ? navCtrl.setRoot(UserPage) : console.log('usuário não está logado') })
    
  }
  public logar(): void{
    this.facebook.login().then(result => {this.alertCtrl.create({
            title: 'Login com sucesso!',
            subTitle: result.status,
            buttons: [{text:'Ok',handler: data => {this.navCtrl.setRoot(UserPage)}}]
    }).present()}).catch(error => {this.alertCtrl.create({
            title: 'Erro no login',
            subTitle: error.errorMessage,
            buttons: [{text:'Ok',handler: data => {
              console.log(error.errorMessage);
            }}]
    }).present()});
  }

}
