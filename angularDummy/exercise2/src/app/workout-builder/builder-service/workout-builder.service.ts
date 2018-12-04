import { Injectable } from '@angular/core';
import { WorkoutPlan, ExercisePlan } from 'src/app/shared/model';
import { WorkoutService } from 'src/app/core/workout.service';


@Injectable()
export class WorkoutBuilderService {


  buildingWorkout: any;
  newWorkout: boolean;
  firstExercise = true;


  constructor(public workoutService: WorkoutService) { }

  startBuilding(name: string): any {

    this.newWorkout = false;
    return this.workoutService.getWorkout(name);

  }

  startBuildingNew(): WorkoutPlan {

    const exercisePlan: Array<ExercisePlan> = [];
    this.buildingWorkout = new WorkoutPlan('', '', 30, exercisePlan);
    this.newWorkout = true;
    return this.buildingWorkout;
  }

  save(): any {
    console.log('reached add workout in workoutBuilder serfvice');
    this.newWorkout ?
      this.workoutService.addWorkout(this.buildingWorkout) : this.workoutService.updateWorkout(this.buildingWorkout);
  }

  removeExercise(exercisePlan: ExercisePlan): void {

    const currentIndex = this.buildingWorkout.exercises.map(
      function (e) {
        return e.exercise.name;
      }
    ).indexOf(exercisePlan.exercise.name);

    this.buildingWorkout.exercises.splice(currentIndex, 1);
  }

  addExercise(exercisePlan: ExercisePlan) {
    if (this.newWorkout && this.firstExercise) {
      this.buildingWorkout.exercises.splice(0, 1);
      this.firstExercise = false;
    }
    this.buildingWorkout.exercises.push(exercisePlan);
  }

  moveExerciseTo(exercise: ExercisePlan, toIndex: number): void {

    if (toIndex < 0 || toIndex >= this.buildingWorkout.exercises.length) {
      return;
    }
    const currentIndex = this.buildingWorkout.exercises.indexOf(exercise);
    this.buildingWorkout.exercises.splice(toIndex, 0, this.buildingWorkout.exercises.splice(currentIndex, 1)[0]);
  }
}
