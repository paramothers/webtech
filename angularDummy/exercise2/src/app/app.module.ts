import { BrowserModule } from '@angular/platform-browser';
import { NgModule, InjectionToken } from '@angular/core';

import { AppComponent } from './app.component';
import { WorkoutRunnerModule } from './workout-runner/workout-runner.module';
import { StartComponent } from './start/start.component';
import { FinishComponent } from './finish/finish.component';
import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';
import { AppConfig } from './core/app-config';
import { WorkoutHistoryComponent } from './workout-history/workout-history.component';
import { SharedModule } from './shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { RemoteValidatorDirective } from './shared/remote-validator.directive';
import { BusyIndicatorDirective } from './shared/busy-indicator.directive';

@NgModule({
  declarations: [
    AppComponent,
    StartComponent,
    FinishComponent,
    WorkoutHistoryComponent,
    RemoteValidatorDirective,
    BusyIndicatorDirective
  ],
  imports: [
    BrowserModule,

    WorkoutRunnerModule,
    AppRoutingModule,
    CoreModule,
    SharedModule,
    HttpClientModule
  ],
  providers: [
    { provide: 'waitingtime', useValue: 5 },
    { provide: 'exerciseDuration', useValue: 10 },
    { provide: 'AppConfig', useValue: new AppConfig(3, 5, 20) }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }



