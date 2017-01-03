import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { FacebookService } from '../../providers/facebook'
import { HomePage } from "../home/home"

@Component({
  selector: 'page-user',
  templateUrl: 'user.html'
})
export class UserPage {
    private nome = '';
    private email = '';
  constructor(public navCtrl: NavController, public navParams: NavParams, public facebook:FacebookService) {
    facebook.getUserInfo()
    .then(data => {this.nome=data.name;this.email=data.email})
    .catch(err => alert(err));
  }

  get getUserNome(){
    return this.nome;
  }

  get getUserEmail(){
    return this.email;
  }

  public logout(){
    this.facebook.logout()
    .then(result => {this.navCtrl.setRoot(HomePage)})
    .catch(err => alert(err));
  }

}
