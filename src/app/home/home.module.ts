import { ShareModule } from './../shared/share.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';



@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    ShareModule
  ],
  exports: [
    HomeComponent
  ]
})
export class HomeModule { }
