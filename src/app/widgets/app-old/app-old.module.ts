import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppOldComponent } from './app-old.component';



@NgModule({
  declarations: [ AppOldComponent ],
  exports: [ AppOldComponent ],
  imports: [
    CommonModule
  ]
})
export class AppOldModule { }
