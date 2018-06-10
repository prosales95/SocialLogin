import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { WeatherApiPage } from './weather-api';

@NgModule({
  declarations: [
    WeatherApiPage,
  ],
  imports: [
    IonicPageModule.forChild(WeatherApiPage),
  ]
})
export class WeatherApiPageModule {}
