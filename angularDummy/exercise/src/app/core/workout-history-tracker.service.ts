import { Injectable } from '@angular/core';
import { CoreModule } from './core.module';
import { ExercisePlan } from '../domain/model';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: CoreModule
})
export class WorkoutHistoryTrackerService {

  private maxHistoryItems = 20;
  private currentWorkoutEntry: WorkoutEntry = null;
  private workoutEntryHistory: Array<WorkoutEntry> = [];
  private workoutTracked: boolean;
  private storageKey = 'workouts';


  constructor(private localStorageService: LocalStorageService) {

    this.workoutEntryHistory = (localStorageService.getItem<Array<WorkoutEntry>>(this.storageKey) || [])
      .map((item: WorkoutEntry) => {
        item.startedOn = new Date(item.startedOn.toString());
        item.endedOn = item.endedOn == null ? null : new Date(item.endedOn.toString());
        return item;
      });
  }

  getHistory(): Array<WorkoutEntry> {

    return this.workoutEntryHistory;
  }
  get tracking(): boolean {

    return this.workoutTracked;
  }

  startTracking(): void {

    this.workoutTracked = true;
    this.currentWorkoutEntry = new WorkoutEntry(new Date());
    if (this.workoutEntryHistory.length >= this.maxHistoryItems) {
      this.workoutEntryHistory.shift();
    }
    this.workoutEntryHistory.push(this.currentWorkoutEntry);
    this.localStorageService.setItem(this.storageKey, this.workoutEntryHistory);
  }

  endTracking(completed: boolean): void {

    this.currentWorkoutEntry.completed = completed;
    this.currentWorkoutEntry.endedOn = new Date();
    // this.currentWorkoutEntry = null;
    this.workoutTracked = false;

    this.localStorageService.setItem(this.storageKey, this.workoutEntryHistory);
  }

  exerciseComplete(exercisePlan: ExercisePlan): void {

    this.currentWorkoutEntry.lastExercise = exercisePlan.exercise.title;
    this.currentWorkoutEntry.exerciseDone++;
    this.localStorageService.setItem(this.storageKey, this.workoutEntryHistory);
  }

}

export class WorkoutEntry {

  constructor(
    public startedOn: Date,
    public completed: boolean = false,
    public exerciseDone: number = 0,
    public lastExercise?: string,
    public endedOn?: Date) { }
}
