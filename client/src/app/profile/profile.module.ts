import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';

import { AppMaterialModule } from '../app-material/app-material.module';

import { JumpChartComponent } from './components/jump-chart/jump-chart.component';
import { JumpPanelComponent } from './components/jump-panel/jump-panel.component';
import { JumpTableComponent } from './components/jump-table/jump-table.component';
import { ProfileEditComponent } from './pages/profile-edit/profile-edit.component';
import { ProfileStatisticsComponent } from './pages/profile-statistics/profile-statistics.component';
import { ProfileViewComponent } from './pages/profile-view/profile-view.component';
import { ProfileRoutingModule } from './profile-routing.module';

@NgModule({
  declarations: [
    ProfileViewComponent,
    ProfileEditComponent,
    ProfileStatisticsComponent,
    JumpTableComponent,
    JumpPanelComponent,
    JumpChartComponent,
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
