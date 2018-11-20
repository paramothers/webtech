import { BrowserModule } from '@angular/platform-browser';
import { NgModule, InjectionToken } from '@angular/core';

import { AppComponent } from './app.component';
import { WorkoutRunnerModule } from './workout-runner/workout-runner.module';
import { StartComponent } from './start/start.component';
import { FinishComponent } from './finish/finish.component';
import { AppRoutingModule } from './app-routing/app-routing.module';

export const REST_IN_BETWEEN_EXERCISE_TIME = new InjectionToken<number>('10');

@NgModule({
  declarations: [
    AppComponent,
    StartComponent,
    FinishComponent
  ],
  imports: [
    BrowserModule,
    WorkoutRunnerModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
