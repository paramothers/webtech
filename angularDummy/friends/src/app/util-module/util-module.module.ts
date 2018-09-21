import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FirstpipePipe } from './pipes/firstpipe.pipe';
import { FriendsDatePipePipe } from './pipes/FriendsDatePipe.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    FirstpipePipe,
    FriendsDatePipePipe
  ],
  exports: [
    FirstpipePipe,
    FriendsDatePipePipe
  ]
})
export class UtilModuleModule { }
