import { Routes } from '@angular/router';

import { AuthGuard } from './core/guards/auth.guard';
import { RoleGuard } from './core/guards/role.guard';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

export const APP_ROUTES: Routes = [
  {
    path: 'auth',
    loadChildren: './auth/auth.module#AuthModule',
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomeModule',
    canLoad: [AuthGuard],
    canActivate: [AuthGuard],
  },
  {
    path: 'profile',
    loadChildren: './profile/profile.module#ProfileModule',
    canLoad: [AuthGuard],
    canActivate: [AuthGuard],
  },
  {
    path: 'admin',
    loadChildren: './admin/admin.module#AdminModule',
    canLoad: [AuthGuard, RoleGuard],
    canActivate: [AuthGuard, RoleGuard],
    data: {
      expectedRole: 'Администратор',
    },
  },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
];
