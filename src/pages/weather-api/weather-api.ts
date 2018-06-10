import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { WeatherPage} from '../weather/weather';
import { ForecastPage} from '../forecast/forecast';

/**
 * Generated class for the WeatherApiPage tabs.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

 @IonicPage()
 @Component({
 	selector: 'page-weather-api',
 	templateUrl: 'weather-api.html'
 })
 export class WeatherApiPage {

 	tab1Root: any = 'WeatherPage'
 	tab2Root:any = 'ForecastPage'


 	constructor(public navCtrl: NavController) {}

 }
