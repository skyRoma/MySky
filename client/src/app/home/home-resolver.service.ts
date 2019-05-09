import { Injectable } from '@angular/core';
import {
  Resolve,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs';

import { WeatherService } from '../core/services/weather.service';

@Injectable({
  providedIn: 'root',
})
export class HomeResolverService implements Resolve<any> {
  constructor(private weatherService: WeatherService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any> | Observable<any> {
    return this.weatherService.getWeather();
  }
}
