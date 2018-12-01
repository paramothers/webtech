import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WorkoutPlan } from '../../shared/model';
import { WorkoutService } from '../../core/workout.service';

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

    this.workoutPlanArray = this.workoutService.getWorkouts();
  }

  onSelect(workoutPlan: WorkoutPlan): void {

    this.router.navigate(['/builder/workout', workoutPlan.name]);
  }

}
