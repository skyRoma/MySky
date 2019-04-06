import { Injectable } from '@angular/core';
import {
  Resolve,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { weatherAppId } from '../core/config/config';

@Injectable({
  providedIn: 'root',
})
export class HomeResolverService implements Resolve<any> {
  constructor(private http: HttpClient) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any> | Observable<any> {
    return this.http.get(
      `https://cors-anywhere.herokuapp.com/https://api.openweathermap.org/data/2.5/weather?id=625144&appid=${weatherAppId}&units=metric`
    );
  }
}
