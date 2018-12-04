import { Component, OnInit } from '@angular/core';
import { Exercise, ExercisePlan } from 'src/app/shared/model';
import { WorkoutService } from 'src/app/core/workout.service';
import { WorkoutBuilderService } from '../builder-service/workout-builder.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'abe-left-nav-exercises',
  templateUrl: './left-nav-exercises.component.html'
})
export class LeftNavExercisesComponent implements OnInit {

  public exerciseList: Observable<Exercise[]>;

  constructor(
    private workoutService: WorkoutService,
    private workoutBuilderService: WorkoutBuilderService) { }

  ngOnInit() {

    this.exerciseList = this.workoutService.getExercises();
  }

  addExercise(exercise: Exercise): void {
    this.workoutBuilderService.addExercise(new ExercisePlan(exercise, 30));
  }

}
