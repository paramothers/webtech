import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrederByPipe } from './oreder-by.pipe';
import { SearchPipe } from './search.pipe';
import { MyAudioDirective } from './my-audio.directive';
import { NumberToSecondsPipe } from './number-to-seconds.pipe';
import { RemoteValidatorDirective } from './remote-validator.directive';
import { BusyIndicatorDirective } from './busy-indicator.directive';
import { AjaxButtonComponent } from './ajax-button/ajax-button.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    OrederByPipe,
    SearchPipe,
    MyAudioDirective,
    NumberToSecondsPipe,
    BusyIndicatorDirective,
    AjaxButtonComponent],

  exports: [
    OrederByPipe,
    SearchPipe,
    MyAudioDirective,
    NumberToSecondsPipe,
    RemoteValidatorDirective,
    BusyIndicatorDirective,
    AjaxButtonComponent
  ]
})
export class SharedModule { }
