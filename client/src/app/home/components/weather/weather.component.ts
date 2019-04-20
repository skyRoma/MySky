import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { JUMP_TYPES } from './weather-config';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss'],
  host: {
    class: 'app-weather',
  },
})
export class WeatherComponent implements OnInit {
  maxAcceptableLvl: number;

  weatherIconUrl: string;

  jumpTypes = JUMP_TYPES;

  currentWeather: any;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.data.subscribe((data: { weather: any }) => {
      this.currentWeather = data.weather;

      this.weatherIconUrl = `http://openweathermap.org/img/w/${
        this.currentWeather.weather[0].icon
      }.png`;

      this.maxAcceptableLvl = this.getWeatherLevel(this.currentWeather);
    });
  }

  getWeatherLevel(currentWeather: any): number {
    if (currentWeather.clouds.all > 50 || currentWeather.rain) {
      return 0;
    }
    if (currentWeather.wind.speed <= 3) {
      return 3;
    }
    if (currentWeather.wind.speed <= 7) {
      return 2;
    }
    if (currentWeather.wind.speed <= 12) {
      return 1;
    }
    return 0;
  }
}
