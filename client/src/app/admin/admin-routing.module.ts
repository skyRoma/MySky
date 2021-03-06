import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { JumpingDayResolverService } from '../core/resolvers/jumping-day-resolver.service';

import { AdminComponent } from './pages/admin/admin.component';
import { UserResolverService } from './pages/resolvers/user-resolver.service';
import { ScheduleComponent } from './pages/schedule/schedule.component';
import { UserInfoComponent } from './pages/user-info/user-info.component';
import { UsersComponent } from './pages/users/users.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    resolve: {
      users: UserResolverService,
    },
    runGuardsAndResolvers: 'always',
    children: [
      {
        path: 'users',
        component: UsersComponent,
        children: [
          {
            path: ':id',
            component: UserInfoComponent,
          },
          {
            path: ':id/path',
            component: UserInfoComponent,
          },
        ],
      },
      {
        path: 'schedule',
        component: ScheduleComponent,
        resolve: {
          jumpingDays: JumpingDayResolverService,
        },
      },
      {
        path: '',
        redirectTo: 'users',
        pathMatch: 'full',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
