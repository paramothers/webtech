import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WorkoutPlan } from '../../shared/model';
import { WorkoutService } from '../../core/workout.service';
import { catchError } from 'rxjs/operators';

@Component({
  selector: 'abe-workouts',
  templateUrl: './workouts.component.html',
  styleUrls: ['./workouts.component.css']
})
export class WorkoutsComponent implements OnInit {

  workoutPlanArray: Array<WorkoutPlan> = [];
  constructor(
    private router: Router,
    private workoutService: WorkoutService) { }

  ngOnInit() {

    this.workoutService.getWorkouts().subscribe(

      (workoutPlan: Array<WorkoutPlan>) => {
        this.workoutPlanArray = workoutPlan;
        this.workoutPlanArray.forEach(
          workout => this.totalWorkoutDuration(workout));
      },

      (err: any) => console.error
    );


  }

  totalWorkoutDuration(workout: WorkoutPlan): void {

    console.log('total time ');
    if (!workout.exercises) {
      return;
    }
    const total = workout.exercises.map((e) => e.duration1).reduce(
                                                (previous, current) => previous + current
                                              );

    console.log('total time ', total);
   // workout.totalWorkoutDuration = (workout.restBetween ? workout.restBetween : 0) * workout.exercises.length - 1 + total;
  }

  onSelect(workoutPlan: WorkoutPlan): void {

    this.router.navigate(['/builder/workout', workoutPlan.name]);
  }

}
