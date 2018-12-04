import { Component, OnInit } from '@angular/core';
import { WorkoutPlan, Exercise } from 'src/app/workout-runner/shared/model';
import { Router } from '@angular/router';
import { WorkoutService } from 'src/app/core/workout.service';

@Component({
  selector: 'abe-exercises',
  templateUrl: './exercises.component.html',
  styleUrls: ['./exercises.component.css']
})
export class ExercisesComponent implements OnInit {

  exerciseArray: Array<Exercise> = [];
  constructor(
    private router: Router,
    private workoutService: WorkoutService) { }

  ngOnInit() {
    this.workoutService.getExercises().subscribe(
      exercise => this.exerciseArray = exercise,
      (err: any) => console.error
      );
  }

  onSelect(exercise: Exercise): void {

    this.router.navigate(['/builder/exercise', exercise.name]);
  }

}
