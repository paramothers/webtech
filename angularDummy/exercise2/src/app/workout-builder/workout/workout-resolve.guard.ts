import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Resolve, Router } from '@angular/router';
import { WorkoutPlan } from '../../shared/model';
import { WorkoutBuilderService } from '../builder-service/workout-builder.service';
import { catchError, map } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WorkoutResolveGuard implements Resolve<WorkoutPlan> {

  constructor(public workoutBuilderService: WorkoutBuilderService, public router: Router) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): WorkoutPlan {

    const workoutName = route.paramMap.get('id');
    console.log('workout name ', workoutName);
    if (!workoutName) {
      return this.workoutBuilderService.startBuildingNew();
    } else {

      return this.workoutBuilderService.startBuilding(workoutName)
        .pipe(
          map(workout1 => {
            if (workout1) {
              this.workoutBuilderService.buildingWorkout = workout1;
              return workout1;
            } else {
              this.router.navigate(['/builder/workouts']);
              return null;
            }
          }),
          catchError(error => {
            console.log('An error occured !');
            this.router.navigate(['/builder/workouts/workout-not-found']);
            return of(null);
          })
        );
    }
  }
}
