import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Wheather } from '../models';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  constructor(private http: HttpClient) {}

  getWeather(): Observable<Wheather[]> {
    return this.http.get<Wheather[]>(`http://localhost:3000/weather`);
  }
}
