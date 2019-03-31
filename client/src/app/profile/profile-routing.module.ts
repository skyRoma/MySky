import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileEditComponent } from './pages/profile-edit/profile-edit.component';
import { ProfileViewComponent } from './pages/profile-view/profile-view.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: '', redirectTo: 'view', pathMatch: 'full' },
      { path: 'view', component: ProfileViewComponent },
      { path: 'edit', component: ProfileEditComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfileRoutingModule {}
