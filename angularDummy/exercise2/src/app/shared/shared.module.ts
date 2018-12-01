import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrederByPipe } from './oreder-by.pipe';
import { SearchPipe } from './search.pipe';
import { MyAudioDirective } from './my-audio.directive';
import { NumberToSecondsPipe } from './number-to-seconds.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    OrederByPipe,
    SearchPipe,
    MyAudioDirective,
    NumberToSecondsPipe],

  exports: [
    OrederByPipe,
    SearchPipe,
    MyAudioDirective,
    NumberToSecondsPipe]
})
export class SharedModule { }
