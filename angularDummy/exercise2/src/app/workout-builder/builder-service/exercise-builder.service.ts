import { Injectable } from '@angular/core';
import { Exercise } from 'src/app/shared/model';
import { WorkoutService } from 'src/app/core/workout.service';

@Injectable({
  providedIn: 'root'
})
export class ExerciseBuilderService {

  buildingExercise: Exercise;
  newExercise: boolean;

  constructor(private workoutService: WorkoutService) { }

 public startBuilding(name: string): Exercise {
    if (name) {
      this.buildingExercise = this.workoutService.getExercise(name);
      this.newExercise = false;
    } else {

      this.buildingExercise = new Exercise('', '', '', '');
      this.newExercise = true;
    }
    return this.buildingExercise;
  }

 private save() {
    const exercise = this.newExercise ?
      this.workoutService.addExercise(this.buildingExercise) :
      this.workoutService.updateExercise(this.buildingExercise);
    this.newExercise = false;
    return exercise;
  }

  delete() {
    this.workoutService.deleteExercise(this.buildingExercise.name);
  }

  addVideo() {

    if (!this.buildingExercise.videos) {

      this.buildingExercise.videos = [];
    }
    this.buildingExercise.videos.push('');
  }

  canDeleteExercise(): boolean {

    return !this.newExercise;
  }

  deleteVideo(index: number) {

    if (index > 0) {

      this.buildingExercise.videos.splice(index, 1);
    }
  }

}
