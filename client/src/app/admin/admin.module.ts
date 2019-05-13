import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AppMaterialModule } from '../app-material/app-material.module';

import { AdminRoutingModule } from './admin-routing.module';
import { UsersListComponent } from './components/users-list/users-list.component';
import { AdminComponent } from './pages/admin/admin.component';
import { ScheduleComponent } from './pages/schedule/schedule.component';
import { UserInfoComponent } from './pages/user-info/user-info.component';
import { UsersComponent } from './pages/users/users.component';

@NgModule({
  declarations: [
    AdminComponent,
    UsersListComponent,
    UsersComponent,
    UserInfoComponent,
    ScheduleComponent,
  ],
  imports: [CommonModule, AdminRoutingModule, AppMaterialModule],
})
export class AdminModule {}
