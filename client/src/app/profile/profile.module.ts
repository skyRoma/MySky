import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';

import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileViewComponent } from './pages/profile-view/profile-view.component';
import { ProfileEditComponent } from './pages/profile-edit/profile-edit.component';
import { ProfileStatisticsComponent } from './pages/profile-statistics/profile-statistics.component';
import { AppMaterialModule } from '../app-material/app-material.module';
import { JumpTableComponent } from './components/jump-table/jump-table.component';
import { AddJumpPanelComponent } from './components/add-jump-panel/add-jump-panel.component';

@NgModule({
  declarations: [
    ProfileViewComponent,
    ProfileEditComponent,
    ProfileStatisticsComponent,
    JumpTableComponent,
    AddJumpPanelComponent,
  ],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    AppMaterialModule,
    ReactiveFormsModule,
    ChartsModule,
  ],
})
export class ProfileModule {}
