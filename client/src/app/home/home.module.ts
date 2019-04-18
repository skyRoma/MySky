import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { AppMaterialModule } from '../app-material/app-material.module';
import { WeatherComponent } from './components/weather/weather.component';

@NgModule({
  declarations: [HomeComponent, WeatherComponent],
  imports: [CommonModule, HomeRoutingModule, AppMaterialModule],
})
export class HomeModule {}
