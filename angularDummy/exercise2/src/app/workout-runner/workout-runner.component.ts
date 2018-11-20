import { Component, OnInit } from '@angular/core';
import { WorkoutPlan, ExercisePlan, Exercise } from './shared/model';
import { WorkoutServiceService } from '../core/workout-service.service';
import { Router } from '@angular/router';

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
  currentExercisePlan: ExercisePlan;
  currentExercisePlanIndex = 0;
  currentExerciseRunningDuration = 0;

  workoutPaused = false;
  exerciseTimeTracker: number;


  constructor(
    private workoutServiceService: WorkoutServiceService,
    private router: Router) { }

  ngOnInit() {

    this.workoutPlan = this.workoutServiceService.getWorkoutPlan();
    this.restExercisePlan = new ExercisePlan(new Exercise('rest', 'Relax!', 'Relax a bit', 'rest.png', '', '', []), 5);
    this.start();
  }

  private pause(): void {

    this.workoutPaused = true;
    window.clearInterval(this.exerciseTimeTracker);
  }

  private play(): void {
    this.workoutPaused = false;
    this.startTrackingCurrentExercise();
  }

  private toogle(): void {
    if (this.workoutPaused) {

      this.play();
    } else {
      this.pause();
    }
  }

  private onKeyPressed(event: KeyboardEvent): void {

    if (event.which === 80 || event.which === 112) {
      this.toogle();
    }
  }

  // start the workoutPlan
  private start(): void {

    this.workoutTimeRemaining = this.workoutPlan.totalWorkoutDuration();
    this.startExercise(this.workoutPlan.exercises[this.currentExercisePlanIndex]);
  }

  // start the given ExercisePlan
  private startExercise(currentExercisePlan: ExercisePlan): void {

    this.currentExercisePlan = currentExercisePlan;
    this.currentExerciseRunningDuration = 0;
    this.startTrackingCurrentExercise();
  }

  // this separate method helps to implement easily pause-play functionality
  private startTrackingCurrentExercise(): void {


    this.exerciseTimeTracker = window.setInterval(() => {

      if (this.currentExerciseRunningDuration >= this.currentExercisePlan.duration1) {

        window.clearInterval(this.exerciseTimeTracker);
        const nextExercisePlan = this.getNextExercisePlan();
        if (nextExercisePlan) {
          if (nextExercisePlan !== this.restExercisePlan) {

            this.currentExercisePlanIndex++;
          }
          this.startExercise(nextExercisePlan);
        } else {

          this.router.navigate(['/finish']);
        }
        return;
      }
      this.currentExerciseRunningDuration++;
      --this.workoutTimeRemaining;
    }, 1000);
  }

  /**
   * this implementation return null after last exercise.
   *
   * if currentExercisePlan is not rest, then return next
   * exercisePlan of current workoutPlan otherwise return restExercisePlan.
   */
  private getNextExercisePlan(): ExercisePlan {

    let nextExercise: ExercisePlan = null;

    if (this.currentExercisePlan === this.restExercisePlan) {

      nextExercise = this.workoutPlan.exercises[this.currentExercisePlanIndex + 1];
    } else if (this.currentExercisePlanIndex < this.workoutPlan.exercises.length - 1) {

      nextExercise = this.restExercisePlan;
    }

    return nextExercise;
  }

  private getProgressStyle(): any {

    return { 'width': (this.currentExerciseRunningDuration / this.currentExercisePlan.duration1) * 100 + '%' };
  }

}
