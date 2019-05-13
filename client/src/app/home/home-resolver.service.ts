import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';

import { WeatherService } from '../core/services/weather.service';

@Injectable({
  providedIn: 'root',
})
export class HomeResolverService implements Resolve<any> {
  constructor(private weatherService: WeatherService) {}

  resolve(): Observable<any> | Observable<any> {
    return this.weatherService.getWeather();
  }
}
