import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdminResolverService } from './admin-resolver.service';
import { AdminComponent } from './pages/admin/admin.component';
import { ScheduleComponent } from './pages/schedule/schedule.component';
import { UserInfoComponent } from './pages/user-info/user-info.component';
import { UsersComponent } from './pages/users/users.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    resolve: {
      users: AdminResolverService,
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
      { path: 'schedule', component: ScheduleComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
