import { Component, OnInit, ViewChild, Inject, forwardRef, AfterViewInit, OnDestroy } from '@angular/core';
import { MyAudioDirective } from '../../shared/my-audio.directive';
import { ExerciseProgressEvent, ExerciseChangedEvent, ExercisePlan } from '../../domain/model';
import { WorkoutRunnerComponent } from '../workout-runner.component';

@Component({
  selector: 'app-workout-audio',
  templateUrl: './workout-audio.component.html',
  styles: []
})
export class WorkoutAudioComponent implements OnInit, AfterViewInit, OnDestroy {


  @ViewChild('ticks')
  private ticks: MyAudioDirective;
  @ViewChild('nextUp')
  private nextUp: MyAudioDirective;
  @ViewChild('nextUpExercise')
  private nextUpExercise: MyAudioDirective;
  @ViewChild('halfway')
  private halfway: MyAudioDirective;
  @ViewChild('aboutToComplete')
  private aboutToComplete: MyAudioDirective;
  private nextupSound: string;

  private subscriptions: Array<any>;

  // constructor(
  //   @Inject(forwardRef(() => WorkoutRunnerComponent)) private runner: WorkoutRunnerComponent) {

  //   this.subscriptions = [

  //     this.runner.exercisePause.subscribe((exercise: ExercisePlan) => this.stop()),
  //     this.runner.workoutComplete.subscribe((exercise: ExercisePlan) => this.stop()),
  //     this.runner.exerciseResumed.subscribe((exercise: ExercisePlan) => this.resume()),
  //     this.runner.exerciseProgress.subscribe((progress: ExerciseProgressEvent) => this.onExerciseProgress(progress)),
  //     this.runner.exerciseChanged.subscribe((state: ExerciseChangedEvent) => this.onExerciseChanged(state))
  //   ];
  // }

  ngOnInit() {
  }

  ngAfterViewInit(): void {

    this.ticks.start();
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((s) => { s.unsubscribe(); });
  }

  stop() {
    this.ticks.stop();
    this.nextUp.stop();
    this.halfway.stop();
    this.aboutToComplete.stop();
    this.nextUpExercise.stop();
  }
  resume() {

    this.ticks.start();
    if (this.nextUp.currentTime > 0 && !this.nextUp.playbackCompleted) { this.nextUp.start(); }
    // tslint:disable-next-line:one-line
    else if (this.nextUpExercise.currentTime > 0 && !this.nextUpExercise.playbackCompleted) { this.nextUpExercise.start(); }
    // tslint:disable-next-line:one-line
    else if (this.halfway.currentTime > 0 && !this.halfway.playbackCompleted) { this.halfway.start(); }
    // tslint:disable-next-line:one-line
    else if (this.aboutToComplete.currentTime > 0 && !this.aboutToComplete.playbackCompleted) { this.aboutToComplete.start(); }
  }

  onExerciseProgress(progress: ExerciseProgressEvent) {
    if (progress.runningFor === Math.floor(progress.exercise.duration / 2)
      && progress.exercise.exercise.name !== 'rest') {
      this.halfway.start();
    }
    // tslint:disable-next-line:one-line
    else if (progress.timeRemaining === 3) {
      this.aboutToComplete.start();
    }
  }

  onExerciseChanged(state: ExerciseChangedEvent) {
    if (state.current.exercise.name === 'rest') {
      this.nextupSound = state.next.exercise.nameSound;
      setTimeout(() => this.nextUp.start(), 2000);
      setTimeout(() => this.nextUpExercise.start(), 3000);
    }
  }
}
