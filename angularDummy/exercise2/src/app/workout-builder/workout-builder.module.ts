import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkoutBuilderComponent } from './workout-builder.component';
import { ExercisesComponent } from './exercises/exercises.component';
import { ExerciseComponent } from './exercise/exercise.component';
import { WorkoutsComponent } from './workouts/workouts.component';
import { WorkoutComponent } from './workout/workout.component';
import { WorkoutBuilderRoutingModule } from './workout-builder.routing.module';
import { LeftNavExercisesComponent } from './navigation/left-nav-exercises.component';
import { LeftNavMainComponent } from './navigation/left-nav-main.component';
import { SubNavMainComponent } from './navigation/sub-nav-main.component';

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
    WorkoutComponent,
    LeftNavExercisesComponent,
    LeftNavMainComponent,
    SubNavMainComponent
  ],
  exports: []
})
export class WorkoutBuilderModule { }
