import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommonModuleRoutingModule } from './common-module-routing.module';
import { AboutComponent } from './components/about/about.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { ErrorAlertComponent } from './components/ErrorAlertComponent/ErrorAlert.component';

@NgModule({
  imports: [
    CommonModule,
    CommonModuleRoutingModule
  ],
  declarations: [
    AboutComponent,
    PageNotFoundComponent,
    ErrorAlertComponent
  ],
  exports: [
    ErrorAlertComponent
  ]
})
export class CommonModuleModule { }
