import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule  } from '@angular/common/http';
import { AppComponent } from './app.component';
import { WorkoutRunnerModule } from './workout-runner/workout-runner.module';
import { StartComponent } from './start/start.component';
import { FinishComponent } from './finish/finish.component';
import { AppRoutingModule } from './app-routing.module';


@NgModule({
   declarations: [
      AppComponent,
      StartComponent,
      FinishComponent
   ],
   imports: [
      BrowserModule,
      WorkoutRunnerModule,
      HttpClientModule,
      AppRoutingModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
