import { Component, OnInit } from '@angular/core';
import { WorkoutPlan, ExercisePlan, Exercise } from '../core/model';
import { WorkoutServiceService } from '../core/workout-service.service';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'abe-workout-runner',
  templateUrl: './workout-runner.component.html',
  styles: []
})
export class WorkoutRunnerComponent implements OnInit {

  workoutPlan: WorkoutPlan;
  restExercisePlan: ExercisePlan;
  workoutTimeRemaining: number;
  currentExercise: Exercise;
  currentExercisePlan: ExercisePlan;
  currentExercisePlanIndex = 0;


  constructor(private workoutServiceService: WorkoutServiceService) { }

  ngOnInit() {

    this.workoutPlan = this.workoutServiceService.getWorkoutPlan();
    this.restExercisePlan = new ExercisePlan(new Exercise('rest', 'Relax!', 'Relax a bit', 'rest.png'), 5);
    this.start();
  }

  // start the workoutPlan
  private start(): any {

    this.workoutTimeRemaining = this.workoutPlan.totalWorkoutDuration();
    this.startExercise(this.workoutPlan[this.currentExercisePlanIndex]);
  }

  // start the given ExercisePlan
  private startExercise(currentExercisePlan: ExercisePlan): void {

    this.currentExercisePlan = currentExercisePlan;
    this.startTrackingCurrentExercise();
  }

  private startTrackingCurrentExercise(): void {

    let currentExerciseRunningDuration = 0;

    const exerciseTimeTracker = window.setInterval(() => {

      if (currentExerciseRunningDuration >= this.currentExercisePlan.duration) {

        window.clearInterval(exerciseTimeTracker);
        const nextExercisePlan = this.getNextExercisePlan();
        if (nextExercisePlan !== this.restExercisePlan) {

          this.currentExercisePlanIndex++;
        }
        this.startExercise(this.workoutPlan[this.currentExercisePlanIndex]);
        return;
      }
      currentExerciseRunningDuration++;
      --this.workoutTimeRemaining;
    }, 1000);
  }

  private getNextExercisePlan(): ExercisePlan {

    let nextExercise: ExercisePlan = null;

    if (this.currentExercisePlan === this.restExercisePlan) {

      nextExercise = this.workoutPlan[this.currentExercisePlanIndex + 1];
    } else if (this.currentExercisePlanIndex < this.workoutPlan.exercises.length - 1) {

      nextExercise = this.restExercisePlan;
    }

    return nextExercise;
  }

}
