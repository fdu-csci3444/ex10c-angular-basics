import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms'; // NOTE ilker need to import FormsModule to be able to use ngModel (for 2 way binding) in a template

import { BindingsComponent } from './bindings/bindings.component';


@NgModule({
  declarations: [BindingsComponent],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class BindingsModule { }
