import { Component, OnInit, OnDestroy } from '@angular/core';
import { WorkoutBuilderService } from '../builder-service/workout-builder.service';
import { ActivatedRoute, Router } from '@angular/router';
import { WorkoutPlan, ExercisePlan } from '../../shared/model';
import { WorkoutService } from 'src/app/core/workout.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'abe-workout',
  templateUrl: './workout.component.html',
  styleUrls: ['./workout.component.css']
})
export class WorkoutComponent implements OnInit, OnDestroy {


  queryParamSub: Subscription;
  workout: WorkoutPlan;
  removeTouched: boolean = false;
  submitted: boolean = false;
  sub: any;
  public notFound = false;
  private workoutName: string;

  constructor(
    public route: ActivatedRoute,
    private router: Router,
    public workoutBuilderService: WorkoutBuilderService,
    private workoutService: WorkoutService) {

    if (route.snapshot.url[1] && route.snapshot.url[1].path === 'workout-not-found') {
      this.notFound = true;
    }


  }

  durations = [
    { title: '30 seconds', value: 30 },
    { title: '45 seconds', value: 45 },
    { title: '1 minute', value: 60 },
    { title: '1 minute 15 seconds', value: 75 },
    { title: '1 minute 30 seconds', value: 90 },
    { title: '1 minute 45 seconds', value: 105 },
    { title: '2 minutes', value: 120 },
    { title: '2 minutes 15 seconds', value: 135 },
    { title: '2 minutes 30 seconds', value: 150 },
    { title: '2 minutes 45 seconds', value: 165 },
    { title: '3 minutes', value: 180 },
    { title: '3 minutes 15 seconds', value: 195 },
    { title: '3 minutes 30 seconds', value: 210 },
    { title: '3 minutes 45 seconds', value: 225 },
    { title: '4 minutes', value: 240 },
    { title: '4 minutes 15 seconds', value: 255 },
    { title: '4 minutes 30 seconds', value: 270 },
    { title: '4 minutes 45 seconds', value: 285 },
    { title: '5 minutes', value: 300 }
  ];

  ngOnInit() {

    this.sub = this.route.data.subscribe((data: { workout: WorkoutPlan }) => {
      this.workout = data.workout;
    });

    this.queryParamSub = this.route.params.subscribe(params => this.workoutName = params['id']);
  }

  removeExercise(exercisePlan: ExercisePlan) {
    this.removeTouched = true;
    this.workoutBuilderService.removeExercise(exercisePlan);
  }

  moveExerciseTo(exercisePlan: ExercisePlan, toIndex: number) {
    this.workoutBuilderService.moveExerciseTo(exercisePlan, toIndex);
  }

  /* save(formWorkout: any) {

    console.log('saved fired..');
    this.submitted = true;
    if (!formWorkout.valid) {

      console.log('saved errro ..');
      return;
    }
    this.workoutBuilderService.save().subscribe(
      success => this.router.navigate(['/builder/workouts']),
      error => console.log(error)
    );
  } */

  save = (formWorkout: any): Promise<Object | WorkoutPlan> => {

    this.submitted = true;
    if (!formWorkout.valid) {
      return;
    }
    const savePromise = this.workoutBuilderService.save().toPromise();
    savePromise.then(
      result => this.router.navigate(['/builder/workouts']),
      err => console.error(err)
    );

    return savePromise;
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
    this.queryParamSub.unsubscribe();
  }

  /**
   * first it check the workoutName is currently editing workout. since we dont want to validation
   * while editing the exitingOne and it is same of currentName.
   */
  validateWorkoutName = (name: string): Promise<boolean> => {

    if (this.workoutName === name) {
      return Promise.resolve(true);
    }

    return this.workoutService.getWorkout(name)
      .toPromise()
      .then((workout: WorkoutPlan) => {
        return !workout;
      }, error => {
        return true;
      });
  }
}