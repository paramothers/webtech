import { Injectable } from '@angular/core';
import { CoreModule } from './core.module';
import { ExercisePlan } from '../workout-runner/shared/model';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: CoreModule
})
export class WorkoutHistoryTrackerService {

  private maxHistoryITem = 20;
  private currentWorkoutLog: WorkoutLogEntry = null;
  private workoutHistory: Array<WorkoutLogEntry> = [];
  private workoutTracked: boolean;
  private storageKey = 'workouts';

  constructor(private storage: LocalStorageService) {

    // this is load history from storage and make it as a Array of WorkoutLotHistory object
    this.workoutHistory = (storage.getItem<Array<WorkoutLogEntry>>(this.storageKey) || [])
      .map((item: WorkoutLogEntry) => {

        item.startedOn = new Date(item.startedOn.toString());
        item.endedOn = item.endedOn == null ? null : new Date(item.endedOn.toString());
        return item;
      });

  }

  get tracking(): boolean {

    return this.workoutTracked;
  }

  /**
   * it is going to get called when the workout has started.
   * set the starttracking Flag as true
   *
   *  worklog size is greater than maxSize then shift the array
   *  then push the current WorkoutLogEntry into array
   *
   *  save this workoutLogHisty into storage.
   */
  startTracking(): void {

    this.workoutTracked = true;
    this.currentWorkoutLog = new WorkoutLogEntry(new Date());
    if (this.workoutHistory.length > this.maxHistoryITem) {

      this.workoutHistory.shift();
    }
    this.workoutHistory.push(this.currentWorkoutLog);
    this.storage.setItem(this.storageKey, this.workoutHistory);
  }

  /**
   * it going to call on end of each exerise. it will store the just
   * completed exercise and increment by one the completed exercise in
   * current workout
   * @param exercisePlan
   */
  exerciseComplete(exercisePlan: ExercisePlan): void {

    this.currentWorkoutLog.numberOfExerciseCompleted++;
    this.currentWorkoutLog.lastExercise = exercisePlan.exercise.title;
    this.storage.setItem(this.storageKey, this.workoutHistory);
  }

  /**
   * it is going to get called when the workout itself has completed.
   *
   */
  endTracking(completed2: boolean): void {

    this.currentWorkoutLog.completed = completed2;
    this.currentWorkoutLog.endedOn = new Date();
    this.storage.setItem(this.storageKey, this.workoutHistory);
    // this.currentWorkoutLog = null;
    this.workoutTracked = false;
  }

  getHistory(): Array<WorkoutLogEntry> {

    return this.workoutHistory;
  }
}

export class WorkoutLogEntry {

  constructor(
    public startedOn: Date,
    public completed: boolean = false,
    public numberOfExerciseCompleted: number = 0,
    public lastExercise?: string,
    public endedOn?: Date
  ) { }
}
