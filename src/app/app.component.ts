import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HomePage } from '../pages/home/home';
import { IonicPage, NavController } from 'ionic-angular';
import { WeatherPage} from '../pages/weather/weather';
import { ForecastPage} from '../pages/forecast/forecast';
import { WeatherApiPage} from '../pages/weather-api/weather-api';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = HomePage;
  pages: Array <{title: string, icon: string, component: any}>;
  @ViewChild(Nav) nav: Nav;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      this.pages = [
        {title: 'Home', icon: 'home', component: HomePage},
        {title: 'Weather', icon: 'star',  component: WeatherPage},
        {title: 'Forecast', icon: 'heart', component: ForecastPage}

      ]
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
  openPage(page) {
    //reset content nav to just this page
    // no need back button to show in screen
    this.nav.setRoot(page.component)
  }
}

