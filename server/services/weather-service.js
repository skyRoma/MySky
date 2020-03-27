const request = require('request-promise-native');

const Repository = require('../repository/repository');
const Weather = require('../models').Weather;

class WeatherService extends Repository {
  find(options) {
    return this.findById(1).then(weather => {
      const minutesDiff = this.getMinutesDiff(weather.updatedAt);
      if (minutesDiff > 15) {
        return this.getNewWeather()
          .then(newWeather => this.update(1, newWeather))
          .then(() => this.findById(1, options))
          .catch(() => this.findById(1, options));
      }
      return this.findById(1, options);
    });
  }

  getMinutesDiff(oldDate) {
    const secDiff = (new Date().getTime() - oldDate.getTime()) / 1000;
    return secDiff / 60;
  }

  getNewWeather() {
    return request(
      `https://api.openweathermap.org/data/2.5/weather?id=625144&appid=${
        process.env.WEATHER_APP_ID
      }&units=metric`
    ).then(newWeather => {
      newWeather = JSON.parse(newWeather);
      const result = {
        clouds: newWeather.clouds.all,
        windSpeed: newWeather.wind.speed,
        rain: newWeather.rain || false,
        snow: newWeather.snow || false,
        temp: newWeather.main.temp,
        icon: newWeather.weather[0].icon,
      };
      return result;
    });
  }
}

const weatherService = new WeatherService(Weather);

module.exports = weatherService;
