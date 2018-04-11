import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { TrackUtilitiesApp } from './app.component';

import { HomePage } from '../pages/home/home';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {MenPointsProvider} from "../providers/calculators/mens";
import {WomenPointsProvider} from "../providers/calculators/womens";
import {MercierPointsProvider} from "../providers/calculators/mercier";

@NgModule({
  declarations: [
      TrackUtilitiesApp,
    HomePage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(TrackUtilitiesApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
      TrackUtilitiesApp,
    HomePage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    MenPointsProvider,
    WomenPointsProvider,
    MercierPointsProvider
  ]
})
export class TrackUtilitiesModule {}
