import { Component, OnInit, OnDestroy, Inject, EventEmitter, Output } from '@angular/core';
import { WorkoutPlan, ExercisePlan, Exercise, ExerciseProgressEvent, ExerciseChangedEvent } from './shared/model';
import { WorkoutServiceService } from '../core/workout-service.service';
import { Router } from '@angular/router';
import { WorkoutHistoryTrackerService } from '../core/workout-history-tracker.service';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'abe-workout-runner',
  templateUrl: './workout-runner.component.html',
  styles: []
})
export class WorkoutRunnerComponent implements OnInit, OnDestroy {


  workoutPlan: WorkoutPlan;
  restExercisePlan: ExercisePlan;
  workoutTimeRemaining: number;
  currentExercisePlan: ExercisePlan;
  currentExercisePlanIndex = 0;
  currentExerciseRunningDuration = 0;

  workoutPaused = false;
  exerciseTimeTracker: number;

  @Output()
  exercisePaused: EventEmitter<number> = new EventEmitter<number>();
  @Output()
  exerciseResumed: EventEmitter<number> = new EventEmitter<number>();


  @Output()
  exerciseProgress: EventEmitter<ExerciseProgressEvent> = new EventEmitter<ExerciseProgressEvent>();
  @Output()
  exerciseChanged: EventEmitter<ExerciseChangedEvent> = new EventEmitter<ExerciseChangedEvent>();


  @Output()
  workoutStarted: EventEmitter<WorkoutPlan> = new EventEmitter<WorkoutPlan>();
  @Output()
  workoutEnded: EventEmitter<WorkoutPlan> = new EventEmitter<WorkoutPlan>();



  constructor(
    private workoutServiceService: WorkoutServiceService,
    private router: Router,
    private workoutHistoryTrackerService: WorkoutHistoryTrackerService,
    @Inject('waitingtime')
    private waitingTime: number
  ) { }

  ngOnInit() {

    this.workoutPlan = this.workoutServiceService.getWorkoutPlan();
    this.restExercisePlan = new ExercisePlan(new Exercise('rest', 'Relax!', 'Relax a bit', 'rest.png', '', '', []), this.waitingTime);
    this.start();

  }
  ngOnDestroy(): void {
    this.workoutHistoryTrackerService.endTracking(false);
  }

  private pause(): void {

    this.workoutPaused = true;
    window.clearInterval(this.exerciseTimeTracker);
    this.exercisePaused.emit(this.currentExercisePlanIndex);
  }

  private play(): void {
    this.workoutPaused = false;
    this.startTrackingCurrentExercise();
    this.exerciseResumed.emit(this.currentExercisePlanIndex);
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
    this.workoutHistoryTrackerService.startTracking();
    this.startExercise(this.workoutPlan.exercises[this.currentExercisePlanIndex]);
    this.workoutStarted.emit(this.workoutPlan);
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
        if (this.currentExercisePlan !== this.restExercisePlan) {

          this.workoutHistoryTrackerService.exerciseComplete(this.currentExercisePlan);
        }
        const nextExercisePlan = this.getNextExercisePlan();
        if (nextExercisePlan) {
          if (nextExercisePlan !== this.restExercisePlan) {

            this.currentExercisePlanIndex++;
          }
          this.startExercise(nextExercisePlan);
          this.exerciseChanged.emit(new ExerciseChangedEvent(this.currentExercisePlan, this.getNextExercisePlan()));
        } else {

          this.workoutHistoryTrackerService.endTracking(true);
          this.workoutEnded.emit(this.workoutPlan);
          this.router.navigate(['/finish']);
        }
        return;
      }
      this.currentExerciseRunningDuration++;
      --this.workoutTimeRemaining;
      this.exerciseProgress.emit(new ExerciseProgressEvent(
        this.currentExercisePlan,
        this.currentExerciseRunningDuration,
        this.currentExercisePlan.duration1 - this.currentExerciseRunningDuration,
        this.workoutTimeRemaining
      ));

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
