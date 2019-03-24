import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AuthGuardService } from '../core/guards/auth.guard';

const routes: Routes = [
  { path: 'home', component: HomeComponent, canActivate: [AuthGuardService] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
