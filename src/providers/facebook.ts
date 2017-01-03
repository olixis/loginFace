import { Injectable } from '@angular/core';
import { Facebook } from 'ionic-native';



@Injectable()
export class FacebookService {

  constructor() {}

  /**
   * login
   */
  public login(): Promise<any> {
    return Facebook.login([
    'email',
    'public_profile',])
    
  }

  /**
   * getLoginStatus
   */
  public getLoginStatus(): Promise<any> {
    return Facebook.getLoginStatus()
  }

  public getUserInfo(): Promise<any> {
    return Facebook.api(`/me?fields=${['email','name'].join(',')}`, ['email','public_profile']);
  }

  public logout(): Promise<any> {
    return Facebook.logout();
  }


}
