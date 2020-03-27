import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { JumpingDayResolverService } from '../core/resolvers/jumping-day-resolver.service';

import { HomeComponent } from './pages/home/home.component';
import { NewsResolverService, WeatherResolverService } from './resolvers';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    resolve: {
      weather: WeatherResolverService,
      news: NewsResolverService,
      jumpingDays: JumpingDayResolverService,
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
