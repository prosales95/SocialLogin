import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';




/*
  Generated class for the AppConstantsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AppConstantsProvider {
	
googleAPIURL: string;
forecastURL: string;

  constructor(private http: HttpClient) {
  	this.forecastURL= "https://api.darksky.net/forecast/572ef53f1d919b6b7f4babb61604bf81/37.8267,-122.4233";
  	this.googleAPIURL= "https://maps.googleapis.com/maps/api/geocode/json?address=";
    console.log('Hello AppConstantsProvider Provider');
  }

  getGoogleAPIURL () {
  	return this.googleAPIURL;
  }

 getForecastURL () {
  	return this.forecastURL;
  }


}
