import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

var config = {
    apiKey: "AIzaSyA9wzXMYyo0981heV96jELqjdT6Bbof_Ao",
    authDomain: "ionic-project-4227b.firebaseapp.com",
    databaseURL: "https://ionic-project-4227b.firebaseio.com",
    projectId: "ionic-project-4227b",
    storageBucket: "ionic-project-4227b.appspot.com",
    messagingSenderId: "282432954453"
  };

@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(config),
    IonicModule.forRoot(MyApp),
    AngularFireAuthModule,

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
