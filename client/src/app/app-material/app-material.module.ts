import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatIconModule,
  MatMenuModule,
  MatToolbarModule,
  MatButtonModule,
} from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [],
  imports: [
    FlexLayoutModule,
    CommonModule,
    MatIconModule,
    MatMenuModule,
    MatToolbarModule,
    MatButtonModule,
  ],
  exports: [
    FlexLayoutModule,
    MatIconModule,
    MatMenuModule,
    MatToolbarModule,
    MatButtonModule,
  ],
})
export class AppMaterialModule {}
