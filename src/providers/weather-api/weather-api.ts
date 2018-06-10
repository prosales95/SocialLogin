import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {AppConstantsProvider} from '../app-constants/app-constants';
import { Observable }     from 'rxjs/Observable';
/*
  Generated class for the WeatherApiProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
  */
  @Injectable()
  export class WeatherApiProvider {
  	weatherURL: string; 
  	private constantVar: any;


  	constructor(private http: HttpClient, constantVar: AppConstantsProvider) {
  		console.log('Hello WeatherApiProvider Provider');
  		this.constantVar= this.constantVar;
  		this.weatherURL= constantVar.getForecastURL();
  	}

  	getCurrentWeather(longitude: any, latitude: any) {
var i =  this.http.get(this.weatherURL+latitude+","+longitude+
        ",+CA&key=AIzaSyBp-oh1T-i9yzuyBbKY732qgyhv9UjpXxI")
  		.map((res:Response) => res.json())
      console.log(i);
      return i;
  	}

  	getGeometry (googleAPIURL: any, location: any) {
  		return this.http.get(googleAPIURL+"'"+location+"'")
  		.map((res:Response) => res.json())
  	}



  }
