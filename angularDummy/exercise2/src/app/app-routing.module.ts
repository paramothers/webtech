import { NgModule } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';
import { StartComponent } from './start/start.component';
import { FinishComponent } from './finish/finish.component';
import { WorkoutHistoryComponent } from './workout-history/workout-history.component';
import { WorkoutContainerComponent } from './workout-runner/workout-container/workout-container.component';

const routes: Routes = [
  { path: 'start', component: StartComponent },
  { path: 'workout', component: WorkoutContainerComponent },
  { path: 'finish', component: FinishComponent },
  { path: 'history', component: WorkoutHistoryComponent },
  { path: 'builder', loadChildren: './workout-builder/workout-builder.module.ts#WorkoutBuilderModule' },
  { path: '**', redirectTo: '/start' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]

})
export class AppRoutingModule { }
