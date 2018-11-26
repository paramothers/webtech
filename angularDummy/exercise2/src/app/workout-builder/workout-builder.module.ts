import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkoutBuilderComponent } from './workout-builder.component';
import { ExercisesComponent } from './exercises/exercises.component';
import { ExerciseComponent } from './exercise/exercise.component';
import { WorkoutsComponent } from './workouts/workouts.component';
import { WorkoutComponent } from './workout/workout.component';
import { WorkoutBuilderRoutingModule } from './workout-builder.routing';

@NgModule({
  imports: [
    CommonModule,
    WorkoutBuilderRoutingModule
  ],
  declarations: [
    WorkoutBuilderComponent,
    ExercisesComponent,
    ExerciseComponent,
    WorkoutsComponent,
    WorkoutComponent
  ],
  exports: [WorkoutBuilderComponent]
})
export class WorkoutBuilderModule { }
