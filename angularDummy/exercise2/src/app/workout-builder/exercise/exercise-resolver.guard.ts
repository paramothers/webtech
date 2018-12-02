import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { Exercise } from 'src/app/shared/model';
import { ExerciseBuilderService } from '../builder-service/exercise-builder.service';

@Injectable()
export class ExerciseResolverGuard implements Resolve<Exercise> {

  public exercise: Exercise;

  constructor(public router: Router,
    public exerciseBuilderService: ExerciseBuilderService) { }

    /**
     *  we get parameter from paramMap using Activated Route Snapshot
     *  then get using that name load exercise either from remote or local
     *  if it return valid object return otherwise change the route.
     * @param next we
     * @param state
     */
  resolve(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Exercise {

    let exerciseName = next.paramMap.get('id');
    if (!exerciseName) {

      exerciseName = '';
    }
    this.exercise = this.exerciseBuilderService.startBuilding(exerciseName);

    if (this.exercise) {
      return this.exercise;
    } else {

      this.router.navigate(['/builder/exercises']);
      return null;
    }
  }
}
