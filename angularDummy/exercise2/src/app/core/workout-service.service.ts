import { Injectable, Inject } from '@angular/core';
import { Exercise, ExercisePlan, WorkoutPlan } from '../workout-runner/shared/model';
import { CoreModule } from './core.module';
import { AppConfig } from './app-config';

@Injectable({
  providedIn: CoreModule
})
export class WorkoutServiceService {

  constructor( @Inject('AppConfig')
  private appConfig: AppConfig) { }

  public getWorkoutPlan(): WorkoutPlan {

    let workoutPlan: WorkoutPlan;

    workoutPlan = new WorkoutPlan('7-Minute', '7-Minute Workout', 5, [], 'it is for workout to complete in 7 minutes');
    // TODO: move this numbers to constant util file
    workoutPlan.exercises.push(new ExercisePlan(this.getJumpingExercise(), this.appConfig.EXERCISE_DURIATION));
    workoutPlan.exercises.push(new ExercisePlan(this.getWallSittingExercise(), this.appConfig.EXERCISE_DURIATION));
    workoutPlan.exercises.push(new ExercisePlan(new Exercise('Running Exercise', 'Running', 'Healing Heart', 'running.png',
      '', 'Procedurere...Procedurere...Procedurere...Procedurere...',
      ['Eh00_rniF8E', 'ZWdBqFLNljc', 'UwRLWMcOdwI', 'ynPwl6qyUNM', 'OicNTT2xzMI']), this.appConfig.EXERCISE_DURIATION));

    return workoutPlan;
  }

  private getWallSittingExercise(): Exercise {

    return new Exercise('Waling Exercise', 'Waking', 'Mind fresh', 'wallsit.png', '',
      'Procedurere...Procedurere...Procedurere...Procedurere...',
      ['y-wV4Venusw', 'MMV3v4ap4ro']);
  }

  private getJumpingExercise(): Exercise {

    return new Exercise('Jumping Exercise', 'Jumping', 'Help legs and stomac', 'JumpingJacks.png', '',
      'Procedurere...<br>Procedurere... <br> Procedurere...<br>Procedurere...',
      ['dmYwZH_BNd0', 'BABOdJ-2Z6o', 'c4DAnQ6DtF8']);
  }
}
