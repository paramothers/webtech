import { Injectable, Inject, ErrorHandler } from '@angular/core';
import { Exercise, ExercisePlan, WorkoutPlan } from '../shared/model';
import { CoreModule } from './core.module';
import { AppConfig } from './app-config';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { _throw } from 'rxjs/observable/throw';
import { forkJoin } from 'rxjs/observable/forkJoin';

@Injectable({
  providedIn: CoreModule
})
export class WorkoutService {



  workoutPlanArray: Array<WorkoutPlan> = [];
  exercises: Array<Exercise> = [];
  workoutPlan: WorkoutPlan;
  collectionUrl = 'https://api.mongolab.com/api/1/databases/angular6/collections';
  apiKey = '3rKGigc0bFvu9u_gk3TDSupAOZkiRTDi';
  params = '?apiKey=' + this.apiKey;


  constructor(
    @Inject('AppConfig')
    private appConfig: AppConfig,
    private http: HttpClient) { }



  updateWorkout(buildingWorkout: WorkoutPlan): any {
    const workoutExercise: any = [];
    buildingWorkout.exercises.forEach(
      (exercisePlan: ExercisePlan) => {
        workoutExercise.push({ name: exercisePlan.exercise.name, duration: exercisePlan.duration1 });
      });

    const body = {
      'id': buildingWorkout.name,
      'exercises': workoutExercise,
      'name': buildingWorkout.name,
      'title': buildingWorkout.title,
      'description': buildingWorkout.description,
      'restBetweenExercise': buildingWorkout.restBetween
    };
    return this.http.put(this.collectionUrl + '/workouts/' + buildingWorkout.name + this.params, body)
      .pipe(catchError(this.handleError<WorkoutPlan>()));
  }

  addWorkout(buildingWorkout: WorkoutPlan): any {
    const workoutExercisePlan: any = [];
    buildingWorkout.exercises.forEach(
      (exercisePlan: ExercisePlan) => {
        workoutExercisePlan.push({ name: exercisePlan.exercise.name, duration: exercisePlan.duration1 });
      }
    );

    const body = {
      '_id': buildingWorkout.name,
      'exercises': workoutExercisePlan,
      'name': buildingWorkout.name,
      'title': buildingWorkout.description,
      'description': buildingWorkout.description,
      'restBetweenExercise': buildingWorkout.restBetween
    };
    return this.http.post(this.collectionUrl + '/workouts' + this.params, body)
      .pipe(
        catchError(this.handleError<WorkoutPlan>())
      );
  }

  updateExercise(buildingExercise: Exercise): Exercise {

    for (let i = 0; i < this.exercises.length; i++) {

      if (this.exercises[i].name === buildingExercise.name) {
        this.exercises[i] = buildingExercise;
        break;
      }
      return buildingExercise;
    }

  }
  addExercise(buildingExercise: Exercise): Exercise {

    if (buildingExercise.name) {
      this.exercises.push(buildingExercise);
      return buildingExercise;
    }
    return null;
  }

  deleteExercise(name: string) {

    this.http.delete(this.collectionUrl + '/workouts/' + this.params)
      .pipe(catchError(this.handleError<WorkoutPlan>()));
  }

  public getExercises(): Observable<Exercise[]> {
    return this.http.get<Exercise[]>(this.collectionUrl + '/exercises' + this.params)
      .pipe(catchError(this.handleError('getExercises', [])));
  }

  public getWorkouts(): Observable<WorkoutPlan[]> {
    return this.http.get<WorkoutPlan[]>(this.collectionUrl + '/workouts' + this.params)
      .pipe(
        map((workouts: Array<any>) => {
          const result: Array<WorkoutPlan> = [];
          if (workouts) {
            workouts.forEach((workout: WorkoutPlan) => {
              result.push(new WorkoutPlan(
                workout.name,
                workout.title,
                workout.restBetween,
                workout.exercises,
                workout.description
              ));
            });
          }
          return result;
        }),
        catchError(this.handleError<WorkoutPlan[]>('getWorkouts', [])));
  }

  getWorkout(name: string): Observable<WorkoutPlan> {
    return forkJoin(
      this.http.get(this.collectionUrl + '/exercises' + this.params),
      this.http.get(this.collectionUrl + '/workouts/' + name + this.params)
    ).pipe(
      map(
        (data: any) => {
          const allExercises = data[0];
          const workoutPlan: WorkoutPlan = data[1];
          const workout = new WorkoutPlan(
            workoutPlan.name,
            workoutPlan.title,
            workoutPlan.restBetween,
            workoutPlan.exercises,
            workoutPlan.description
          );
          workout.exercises.forEach(
            (exercisePlan: any) => exercisePlan.exercise = allExercises.find(
              (x: any) => x.name === exercisePlan.name
            )
          );
          return workout;
        }
      ),
      catchError(this.handleError<WorkoutPlan>(`getWorkout id=${name}`))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {

    return (error: HttpErrorResponse): Observable<T> => {

      if (error.status === 404) {
        console.log('HTTP 404 Not found error');
        return of(result as T);
      } else {
        console.error(error);
        return _throw('An error occured', error.error.message);
      }
    };
  }

  public getExercise(name: string): Observable<Exercise> {

    return this.http.get<Exercise>(this.collectionUrl + '/exercises/' + name + this.params)
      .pipe(catchError(this.handleError<Exercise>(`getExercise id=${name}`)));
  }
}
