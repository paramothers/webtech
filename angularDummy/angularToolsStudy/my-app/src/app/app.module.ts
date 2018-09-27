import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ParamStudyComponent } from './param-study/param-study.component';
import { ParamStudy2Component } from './param-study2/param-study2.component';
import { ParamStudy3Component } from './param-study3/param-study3.component';
import { ParamStudy4Component } from './param-study4/param-study4.component';
import { ParamStudy5Component } from './param-study5.component';
import { ParamStudy6Component } from './param-study6.component';
import { ConvertAgePipe } from './convert-age.pipe';
import { ConvertAge2Pipe } from './convert-age2.pipe';
import { ConvertAge32Pipe } from './convert-age32.pipe';
import { ConvertAgse32Pipe } from './convert-agse32.pipe';
import { Convert34agse32Pipe } from './convert-34agse32.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ParamStudyComponent,
    ParamStudy2Component,
    ParamStudy3Component,
    ParamStudy4Component,
    ParamStudy5Component,
    ParamStudy6Component,
    ConvertAgePipe,
    ConvertAge2Pipe,
    ConvertAge32Pipe,
    ConvertAgse32Pipe,
    Convert34agse32Pipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
