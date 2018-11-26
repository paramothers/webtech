import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule, Router } from '@angular/router';
import { StartComponent } from '../start/start.component';
import { FinishComponent } from '../finish/finish.component';
import { WorkoutHistoryComponent } from '../workout-history/workout-history.component';
import { WorkoutContainerComponent } from '../workout-runner/workout-container/workout-container.component';
import { WorkoutBuilderComponent } from '../workout-builder/workout-builder.component';

const routes: Routes = [
  { path: 'start', component: StartComponent },
  { path: 'workout', component: WorkoutContainerComponent },
  { path: 'finish', component: FinishComponent },
  { path: 'history', component: WorkoutHistoryComponent },
  { path: 'builder', component: WorkoutBuilderComponent },
  { path: '**', redirectTo: '/start' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]

})
export class AppRoutingModule { }
