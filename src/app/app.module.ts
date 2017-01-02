import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { UserPage } from "../pages/user/user";
import { FacebookService } from '../providers/facebook';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    UserPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    UserPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler},
  FacebookService
  ]
})
export class AppModule {}
