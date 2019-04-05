import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfileEditComponent } from './pages/profile-edit/profile-edit.component';
import { ProfileViewComponent } from './pages/profile-view/profile-view.component';
import { ProfileStatisticsComponent } from './profile-statistics/profile-statistics.component';
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
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfileRoutingModule {}
