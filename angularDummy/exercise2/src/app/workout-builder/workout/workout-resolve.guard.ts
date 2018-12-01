import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Resolve, Router } from '@angular/router';
import { WorkoutPlan } from '../../shared/model';
import { WorkoutBuilderService } from '../builder-service/workout-builder.service';

@Injectable({
  providedIn: 'root'
})
export class WorkoutResolveGuard implements Resolve<WorkoutPlan> {

  public workout: WorkoutPlan;
  constructor(public workoutBuilderService: WorkoutBuilderService, public router: Router) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): WorkoutPlan {

    let workoutName = route.paramMap.get('id');
    console.log('workout name ', workoutName);
    if (!workoutName) {
      workoutName = '';
    }

    this.workout = this.workoutBuilderService.startBuilding(workoutName);
    if (this.workout) {

      return this.workout;
    } else {
      this.router.navigate(['/builder/workouts']);
      return null;
    }


  }
}
