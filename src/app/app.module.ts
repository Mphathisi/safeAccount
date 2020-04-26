import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

firebase.initializeApp({
  apiKey: "AIzaSyBfIU84Ydtbbh65utsTfMNBqa9XUz9hVyI",
  authDomain: "safe-app-52370.firebaseapp.com",
  databaseURL: "https://safe-app-52370.firebaseio.com",
  projectId: "safe-app-52370",
  storageBucket: "safe-app-52370.appspot.com",
  messagingSenderId: "425446228902",
  appId: "1:425446228902:web:3d6d948d78ade41a59c567",
  measurementId: "G-Q47RPGJ8WT"
});

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
