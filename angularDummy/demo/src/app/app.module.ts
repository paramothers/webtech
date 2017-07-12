import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { SportComponent } from './sport/sport.component';
import {MovielistService} from './services/movelist/movielist.service';
import { BoldDirective } from './directives/bold/bold.directive';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    SportComponent,
    BoldDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [MovielistService],
  bootstrap: [AppComponent]
})
export class AppModule { }
