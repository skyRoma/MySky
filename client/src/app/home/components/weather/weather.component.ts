import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { JUMP_TYPES } from './weather-config';
import { Wheather } from 'src/app/core/models';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'app-weather',
  },
})
export class WeatherComponent implements OnInit {
  maxAcceptableLvl: number;

  weatherIconUrl: string;

  jumpTypes = JUMP_TYPES;

  currentWeather: Wheather;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.data.subscribe((data: { weather: Wheather }) => {
      this.currentWeather = data.weather;
      this.weatherIconUrl = `http://openweathermap.org/img/w/${
        this.currentWeather.icon
      }.png`;
      this.maxAcceptableLvl = this.getWeatherLevel(this.currentWeather);
    });
  }

  getWeatherLevel(currentWeather: Wheather): number {
    if (
      currentWeather.clouds > 50 ||
      currentWeather.rain ||
      currentWeather.snow
    ) {
      return 0;
    }
    if (currentWeather.windSpeed <= 3) {
      return 3;
    }
    if (currentWeather.windSpeed <= 7) {
      return 2;
    }
    if (currentWeather.windSpeed <= 12) {
      return 1;
    }
    return 0;
  }
}
