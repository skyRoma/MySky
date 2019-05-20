import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProfileEditComponent } from './pages/profile-edit/profile-edit.component';
import { ProfileStatisticsComponent } from './pages/profile-statistics/profile-statistics.component';
import { ProfileViewComponent } from './pages/profile-view/profile-view.component';
import { ProfileResolverService } from './profile-resolver.service';

const routes: Routes = [
  {
    path: ':id',
    component: ProfileStatisticsComponent,
    resolve: {
      profile: ProfileResolverService,
    },
    runGuardsAndResolvers: 'always',
    children: [
      {
        path: '',
        component: ProfileViewComponent,
      },
      { path: 'edit', component: ProfileEditComponent },
    ],
  },
  {
    path: '',
    redirectTo: '/home',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfileRoutingModule {}
