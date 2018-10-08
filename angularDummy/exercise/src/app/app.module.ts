import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule  } from '@angular/common/http';
import { AppComponent } from './app.component';
import { WorkoutRunnerModule } from './workout-runner/workout-runner.module';
import { StartComponent } from './start/start.component';
import { FinishComponent } from './finish/finish.component';
import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';
import { AppConfig } from './AppConfig';
import { WorkoutHistoryComponent } from './workout-history/workout-history.component';
import { SharedModule } from './shared/shared.module';


@NgModule({
   declarations: [
      AppComponent,
      StartComponent,
      FinishComponent,
      WorkoutHistoryComponent
   ],
   imports: [
      BrowserModule,
      WorkoutRunnerModule,
      HttpClientModule,
      AppRoutingModule,
      CoreModule,
      SharedModule
   ],
   providers: [
     {provide: 'AppConfig', useValue: {'age': 23, envirment: 'dev'} }
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
