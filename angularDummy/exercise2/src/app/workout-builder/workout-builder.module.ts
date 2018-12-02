import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
import { SharedModule } from '../shared/shared.module';
import { WorkoutResolveGuard } from './workout/workout-resolve.guard';
import { WorkoutBuilderService } from './builder-service/workout-builder.service';
import { ExerciseBuilderService } from './builder-service/exercise-builder.service';
import { ExerciseResolverGuard } from './exercise/exercise-resolver.guard';

@NgModule({
  imports: [
    CommonModule,
    WorkoutBuilderRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule
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
  exports: [],
  providers: [
    WorkoutBuilderService,
    WorkoutResolveGuard,
    ExerciseBuilderService,
    ExerciseResolverGuard
  ]
})
export class WorkoutBuilderModule { }
