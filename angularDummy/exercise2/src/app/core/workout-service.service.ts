import { Injectable } from '@angular/core';
import { WorkoutPlan, Exercise, ExercisePlan } from './model';

@Injectable({
  providedIn: 'root'
})
export class WorkoutServiceService {

  constructor() { }

  public getWorkoutPlan(): WorkoutPlan {

    let workoutPlan: WorkoutPlan;

    workoutPlan = new WorkoutPlan('7-Minute', '7-Minute Workout', 5, [], 'it is for workout to complete in 7 minutes');

    workoutPlan.exercises.push(new ExercisePlan(this.getJumpingExercise(), 20));
    workoutPlan.exercises.push(new ExercisePlan(this.getWallSittingExercise(), 20));
    workoutPlan.exercises.push(new ExercisePlan(new Exercise('Running Exercise', 'Running', 'Healing Heart', ''), 20));


    return workoutPlan;
  }

  private getWallSittingExercise(): Exercise {

    return new Exercise('Waling Exercise', 'Waking', 'Mind fresh', '', '', '',
      ['y-wV4Venusw', 'MMV3v4ap4ro']);
  }

  private getJumpingExercise(): Exercise {

    return new Exercise('Jumping Exercise', 'Jumping', 'Help legs and stomac', '', '', '',
      ['dmYwZH_BNd0', 'BABOdJ-2Z6o', 'c4DAnQ6DtF8']);
  }
}
