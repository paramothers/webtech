import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WorkoutBuilderComponent } from './workout-builder.component';
import { WorkoutsComponent } from './workouts/workouts.component';
import { WorkoutComponent } from './workout/workout.component';
import { ExerciseComponent } from './exercise/exercise.component';
import { ExercisesComponent } from './exercises/exercises.component';
import { WorkoutResolveGuard } from './workout/workout-resolve.guard';

const routes: Routes = [
  {
    path: '', component: WorkoutBuilderComponent,
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'workouts' },
      { path: 'workouts', component: WorkoutsComponent },
      { path: 'workout/new', component: WorkoutComponent, resolve: {workout: WorkoutResolveGuard} },
      { path: 'workout/:id', component: WorkoutComponent, resolve: {workout: WorkoutResolveGuard} },
      { path: 'exercises', component: ExercisesComponent },
      { path: 'exercise/new', component: ExerciseComponent },
      { path: 'exercise/:id', component: ExerciseComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WorkoutBuilderRoutingModule {


}
