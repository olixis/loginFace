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


}
