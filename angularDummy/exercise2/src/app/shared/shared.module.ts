import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrederByPipe } from './oreder-by.pipe';
import { SearchPipe } from './search.pipe';
import { MyAudioDirective } from './my-audio.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    OrederByPipe,
    SearchPipe,
    MyAudioDirective],

  exports: [
    OrederByPipe,
    SearchPipe,
    MyAudioDirective]
})
export class SharedModule { }
