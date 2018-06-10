import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { WeatherApiProvider } from '../../providers/weather-api/weather-api';
import { AppConstantsProvider } from '../../providers/app-constants/app-constants';

/**
 * Generated class for the ForecastPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

 @IonicPage()
 @Component({
 	selector: 'page-forecast',
 	templateUrl: 'forecast.html',
 })
 export class ForecastPage {

 	forecastForm: FormGroup;
 	private appConstants:any;
 	private Weather: any;
 	private geometry:any;
 	private minWeather: number [][];
 	private maxWeather: number [][];
 	private weatherTime: any;
 	private currentWeather: any;
 	weatherResult: boolean;
 	summaryIcon:string;
 	chartValue: any;

 	constructor(public navCtrl: NavController, 
 		public navParams: NavParams, private fb: FormBuilder, 
 		appConstants: AppConstantsProvider, 
 		WeatherApi: WeatherApiProvider ) {
 		this.forecastForm = fb.group({
 			'location':['', Validators.compose([Validators.required,
 				Validators.pattern('[a-zA-Z, ]*'), Validators.
 				minLength(3), Validators.maxLength(100)])], 
 			'forecastType':'daily'

 		});
 		this.appConstants= appConstants;
 		this.Weather=WeatherApi;
 		this.geometry= {"longitude": "", "latitude": ""}
 		this.currentWeather ={};
 		this.minWeather= new Array() ;
 		this.maxWeather= new Array();
 		this.weatherTime= new Array();
 		this.weatherResult =false;
 		this.summaryIcon="";
 		this.chartValue = {};


 	}

 	filterJson(json, forecastType) {
 		this.minWeather = new Array();
 		this.maxWeather = new Array();
 		this.weatherTime = new Array();

 		for (var i = 0; i < json.length ;  i++) {
 			var months = ['Jan', 'Feb','Mar','Apr','May','Jun','Jul',
 			'Aug','Sep','Oct','Nov','Dec'];
 			var b:Date = new Date(json[i].time *100);
 			if (forecastType == "daily") {
 				this.weatherTime.push(b.getDate() + " "+months[b.
 					getMonth()]+" "+b.getFullYear());
 				this.maxWeather.push(json[i].temperatureMax);
 				this.minWeather.push(json[i].temperatureMin);
 			}
 			else 
 			{
 				this.weatherTime.push(b.getDate()+" ", months[b.
 					getMonth()+"-"+b.getHours()+" hours" ]);
 				this.minWeather.push(json[i].temperature);
 				
 			}

 		}

 	} 

 	getForecast(formData: any) {
 		this.Weather.getGeometry(this.appConstants.
 			getGoogleAPIURL(), formData.value.location).
 		subscribe((data:any) => {
 			this.geometry.longitude = data.results[0].
 			geometry.location.lng;
 			this.geometry.latitude = data.results[0].
 			geometry.location.lat;
 			this.Weather.getCurrentWeather(this.geometry.
 				longitude, this.geometry.latitude).
 			subscribe((weatherData: any) => {
 				this.weatherResult = true;
 				if (formData.value.forecastType == "daily") {
 					this.filterJson(weatherData.daily.data,
 						formData.value.forecastType);
 					this.chartValue = {
 						title: {text: 'Weather Forecast'},
 						chart : {type: 'column'},
 						xAxis : { categories: this.weatherTime},
 						series: [
 						{name: 'Min Temp', data: this.minWeather},
 						{name: 'Max Temp', data: this.maxWeather}
 						]};
 					} 
 					else 
 					{
 						this.filterJson(weatherData.hourly.data, formData.
 							value.forecastType);
 						this.chartValue = {
 							title: {text: 'Weather Forecast'},
 							chart: {type: 'column'},
 							xAxis: {
 								categories:this.weatherTime
 							},
 							series: [
 							{name: 'Min Temp', data:this.minWeather },
 							]
 						};

 					}
 				});

 		});
 	}


 	ionViewDidLoad() {
 		console.log('ionViewDidLoad ForecastPage');
 	}

 }
