import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrederByPipe } from './oreder-by.pipe';
import { SearchPipe } from './search.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [OrederByPipe, SearchPipe],
  exports: [OrederByPipe, SearchPipe]
})
export class SharedModule { }
