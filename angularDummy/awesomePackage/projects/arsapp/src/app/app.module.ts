import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ArsComponentsModule } from 'ars-components';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, ArsComponentsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
