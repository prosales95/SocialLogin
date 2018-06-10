import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { IonicPage, NavController } from 'ionic-angular';
import { WeatherPage} from '../pages/weather/weather';
import { ForecastPage} from '../pages/forecast/forecast';
import { WeatherApiPage} from '../pages/weather-api/weather-api';
import { AppConstantsProvider } from '../providers/app-constants/app-constants';
import { WeatherApiProvider } from '../providers/weather-api/weather-api';
import 'rxjs/add/operator/map';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { ChartModule } from 'angular2-highcharts';

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
  HomePage,
  WeatherPage,
  ForecastPage,
  WeatherApiPage
 
  ],
  imports: [
  BrowserModule,
  AngularFireModule.initializeApp(config),
  AngularFireAuthModule,
  HttpClientModule,
  ChartModule,
  IonicModule.forRoot(MyApp)

  ],
  bootstrap: [IonicApp],
  entryComponents: [
  MyApp,
  HomePage,
  WeatherPage,
  ForecastPage,
  WeatherApiPage
  ],
  providers: [
  StatusBar,
  SplashScreen,
  {provide: ErrorHandler, useClass: IonicErrorHandler},
  AppConstantsProvider,
  WeatherApiProvider
  ]
})
export class AppModule {}
