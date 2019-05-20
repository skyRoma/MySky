import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AppMaterialModule } from '../app-material/app-material.module';

import { NewsComponent } from './components/news/news.component';
import { WeatherComponent } from './components/weather/weather.component';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './pages/home/home.component';

@NgModule({
  declarations: [HomeComponent, WeatherComponent, NewsComponent],
  imports: [CommonModule, HomeRoutingModule, AppMaterialModule],
})
export class HomeModule {}
