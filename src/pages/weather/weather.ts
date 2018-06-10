import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { WeatherApiProvider } from '../../providers/weather-api/weather-api';
import { AppConstantsProvider } from '../../providers/app-constants/app-constants';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the WeatherPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

 @IonicPage()
 @Component({
 	selector: 'page-weather',
 	templateUrl: 'weather.html',
 })
 export class WeatherPage {
 	weatherForm: FormGroup;
 	private appConstants:any;
 	private Weather: any;
 	private geometry:any;
 	private currentWeather: any;
 	weatherResult: boolean;
 	summaryIcon:string;

 	constructor(public navCtrl: NavController, 
 		public navParams: NavParams, private fb: FormBuilder, 
 		appConstants: AppConstantsProvider, 
 		WeatherApi: WeatherApiProvider ) {
 		this.weatherForm = fb.group({
 			'location':['', Validators.compose([Validators.required,
 				Validators.pattern('[a-zA-Z, ]*'), Validators.
 				minLength(3), Validators.maxLength(100)])]
 		});
 		this.appConstants= appConstants;
 		this.Weather=WeatherApi;
 		this.geometry= {"longitude": "", "latitude": ""}
 		this.currentWeather ={};
 		this.weatherResult =false;
 		this.summaryIcon="";


 	}

 	getWeather(formData: any){
 		this.Weather.getGeometry(this.appConstants.getGoogleAPIURL()
 			, formData.value.location).subscribe((data : any) => {
 				this.geometry.longitude= data.results[0].geometry.
 				location.lng;
 				this.geometry.latitude = data.results[0].geometry.
 				location.lat;
 				this.Weather.getCurrentWeather(this.geometry.longitude,
 					this.geometry.latitude).subscribe((weatherData:any ) =>{
 						this.currentWeather=weatherData.currenty;
 						this.weatherResult =true;

 						if(this.currentWeather.summaty.toLowerCase().
 							indexOf("cloudy")>0 )
 							this.summaryIcon="cloudy";
 						else if(this.currentWeather.summaty.toLowerCase().
 							indexOf("rainy")>0 )
 							this.summaryIcon="rainy";
 						else if(this.currentWeather.summaty.toLowerCase().
 							indexOf("sunny")>0 )
 							this.summaryIcon="sunny";
 						else if(this.currentWeather.summaty.toLowerCase().
 							indexOf("thunderstorm")>0 )
 							this.summaryIcon="thunderstorm";
 					}); 
 				});
 		}

 		ionViewDidLoad() {
 			console.log('ionViewDidLoad WeatherPage');
 		}

 	}
