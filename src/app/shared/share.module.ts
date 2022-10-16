import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import {CarouselModule} from 'ngx-bootstrap/carousel'
import { ReactiveFormsModule } from '@angular/forms';
import { BsDropdownModule,BsDropdownConfig } from 'ngx-bootstrap/dropdown';
import { TextInputComponent } from './text-input/text-input.component';


@NgModule({
  declarations: [
    TextInputComponent
  ],
  imports: [
    CommonModule,
    PaginationModule.forRoot(),
    CarouselModule.forRoot(),
    ReactiveFormsModule,
    BsDropdownModule.forRoot()

  ],
  exports: [PaginationModule,
  CarouselModule,
  ReactiveFormsModule,
  BsDropdownModule,
  TextInputComponent ]
})
export class ShareModule { }
