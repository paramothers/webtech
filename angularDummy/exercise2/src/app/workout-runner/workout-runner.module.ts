import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkoutRunnerComponent } from './workout-runner.component';
import { WorkoutServiceService } from '../core/workout-service.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [WorkoutRunnerComponent],
  exports: [
    WorkoutRunnerComponent
  ],
  providers: [WorkoutServiceService]

})
export class WorkoutRunnerModule { }
