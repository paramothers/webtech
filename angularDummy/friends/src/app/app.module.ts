import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AuthenticationModule} from './authentication-module/authentication.module';

import { AppComponent } from './components/app.component';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@Angular/forms';
import {AngularFireModule} from 'angularfire2';
import {AngularFireAuth} from 'angularfire2/auth';
import {AngularFireDatabase} from 'angularfire2/database';
import { environment } from '../environments/environment';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppRouting } from './app.routing';
import { UserModuleModule } from './user-module/user-module.module';

@NgModule({
   declarations: [
      AppComponent,
   ],
   imports: [
      CommonModule,
      BrowserModule,
      FormsModule,
      AngularFireModule.initializeApp(environment.firebase),
      BrowserAnimationsModule,
      AppRouting,
      UserModuleModule,
      AuthenticationModule
  ],
  providers: [
    AngularFireAuth,
    AngularFireDatabase
  ],
  exports: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
