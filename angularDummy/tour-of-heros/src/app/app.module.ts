import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HerosComponent } from './heros/heros.component';
import { environment } from '../environments/environment.prod';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroService } from './services/hero.service';
import { MessageComponent } from './components/message/message.component';
import { MessageService } from './services/message.service';
import {Routes, RouterModule} from '@angular/router';
import { AppRoutingModule } from './app-routing/app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    HerosComponent,
    HeroDetailComponent,
    MessageComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule

  ],
  providers: [HeroService, MessageService],
  bootstrap: [AppComponent]
})
export class AppModule {


 }
