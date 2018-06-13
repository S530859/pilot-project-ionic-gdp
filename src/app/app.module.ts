import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { DemoPage } from '../pages/demo/demo';
import { HTTP } from '@ionic-native/http';
import { Demo1Page } from '../pages/demo1/demo1';
import { AddnewuserPage } from '../pages/addnewuser/addnewuser';
import { CustomService } from '../services/custome-service';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    DemoPage,
    Demo1Page,
    AddnewuserPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    DemoPage,
    Demo1Page,
    AddnewuserPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    HTTP,
    {provide: ErrorHandler, useClass: IonicErrorHandler},CustomService
  ]
})
export class AppModule {}
