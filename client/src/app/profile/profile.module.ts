import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileViewComponent } from './pages/profile-view/profile-view.component';
import { ProfileEditComponent } from './pages/profile-edit/profile-edit.component';

@NgModule({
  declarations: [ProfileViewComponent, ProfileEditComponent],
  imports: [CommonModule, ProfileRoutingModule],
})
export class ProfileModule {}
