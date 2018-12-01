import { Component, OnInit } from '@angular/core';
import { Exercise } from 'src/app/shared/model';
import { WorkoutService } from 'src/app/core/workout.service';

@Component({
  selector: 'abe-left-nav-exercises',
  templateUrl: './left-nav-exercises.component.html'
})
export class LeftNavExercisesComponent implements OnInit {

  public exerciseList: Array<Exercise> = [];
  constructor(private workoutService: WorkoutService) { }

  ngOnInit() {

    this.exerciseList = this.workoutService.getExercises();
  }

  addExercise(exercise: Exercise): void {

  }

}
