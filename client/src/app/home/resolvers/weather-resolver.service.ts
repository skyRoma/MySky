import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { WeatherService } from 'src/app/core/services';

@Injectable({
  providedIn: 'root',
})
export class WeatherResolverService implements Resolve<any> {
  constructor(private weatherService: WeatherService) {}

  resolve(): Observable<any> | Observable<any> {
    return this.weatherService.getWeather();
  }
}
