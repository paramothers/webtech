import { Component, OnInit, ViewChild, AfterViewInit, OnDestroy } from '@angular/core';
import { MyAudioDirective } from 'src/app/shared/my-audio.directive';
import { ExerciseChangedEvent, ExerciseProgressEvent } from '../../shared/model';

@Component({
  selector: 'abe-workout-audio',
  templateUrl: './workout-audio.component.html',
  styleUrls: ['./workout-audio.component.css']
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

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit(): void {

    this.ticks.start();
  }

  ngOnDestroy(): void {

  }


  stop() {

    this.ticks.stop();
    this.nextUp.stop();
    this.halfway.stop();
    this.nextUpExercise.stop();
    this.aboutToComplete.stop();
  }
  resume() {

    this.ticks.start();
    if (this.nextUp.currentTime > 0 && !this.nextUp.playbackComplete) {
      this.nextUp.start();
    } else if (this.nextUpExercise.currentTime > 0 && !this.nextUpExercise.playbackComplete) {
      this.nextUpExercise.start();
    } else if (this.halfway.currentTime > 0 && !this.halfway.playbackComplete) {
      this.halfway.start();
    } else if (this.aboutToComplete.currentTime > 0 && !this.aboutToComplete.playbackComplete) {
      this.aboutToComplete.start();
    }

  }
  onExerciseProgress(progress: ExerciseProgressEvent) {

    // TODO: move this 'rest' word to AppConfig
    if (progress.runningFor === Math.floor(progress.exercisePlan.duration1 / 2)
      && progress.exercisePlan.exercise.name !== 'rest') {

      this.halfway.start();
    }
  }
  onExerciseChanged(state: ExerciseChangedEvent) {

    // TODO: move this 'rest' word to AppConfig
    if (state.currentExercisePlan.exercise.name === 'rest') {

      this.nextupSound = state.nextExercisePlan.exercise.nameSound;
      setTimeout(() => {
        this.nextUp.start();
      }, 2000);
      setTimeout(() => {
        this.nextUpExercise.start();
      }, 3000);
    }
  }

}











