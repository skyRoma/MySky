import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileViewComponent } from './pages/profile-view/profile-view.component';
import { ProfileEditComponent } from './pages/profile-edit/profile-edit.component';
import { ProfileStatisticsComponent } from './profile-statistics/profile-statistics.component';
import { AppMaterialModule } from '../app-material/app-material.module';
import { JumpTableComponent } from './components/jump-table/jump-table.component';

@NgModule({
  declarations: [
    ProfileViewComponent,
    ProfileEditComponent,
    ProfileStatisticsComponent,
    JumpTableComponent,
  ],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    AppMaterialModule,
    ReactiveFormsModule,
  ],
})
export class ProfileModule {}
