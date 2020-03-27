import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppMaterialModule } from '../app-material/app-material.module';

import { BookJumpComponent } from './components/book-jump/book-jump.component';
import { JumpingDaysComponent } from './components/jumping-days/jumping-days.component';
import { NewsComponent } from './components/news/news.component';
import { WeatherComponent } from './components/weather/weather.component';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './pages/home/home.component';

@NgModule({
  declarations: [
    HomeComponent,
    WeatherComponent,
    NewsComponent,
    JumpingDaysComponent,
    BookJumpComponent,
  ],
  imports: [
    ReactiveFormsModule,
    CommonModule,
    HomeRoutingModule,
    AppMaterialModule,
  ],
  entryComponents: [BookJumpComponent],
})
export class HomeModule {}
