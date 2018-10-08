import { async, ComponentFixture, TestBed, fakeAsync, tick, discardPeriodicTasks, inject } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { WorkoutRunnerComponent } from './workout-runner.component';
import { Router } from '@angular/router';
import { of } from 'rxjs';
import { WorkoutPlan, ExercisePlan, Exercise } from '../domain/model';
import { SecondToPipePipe } from './shared/second-to-pipe.pipe';
import { WorkoutHistoryTrackerService } from '../core/workout-history-tracker.service';
class MockWorkoutHistoryTracker {

  startTracking() { }
  endTracking() { }
  exerciseComplete() { }
}
class MockWorkoutService {

  sampleWorkout = new WorkoutPlan(
    'testworkout',
    'Test Workout',
    40,
    [
      new ExercisePlan(new Exercise('exercise1', 'Exercise 1', 'Exercise 1 description', '/image1/path', 'audio1/path'), 50),
      new ExercisePlan(new Exercise('exercise1', 'Exercise 2', 'Exercise 2 description', '/image2/path', 'audio2/path'), 30),
      new ExercisePlan(new Exercise('exercise1', 'Exercise 3', 'Exercise 3 description', '/image3/path', 'audio3/path'), 20)
    ],
    'This is a test workout'
  );

  getWorkout(name: string) {
    return of(this.sampleWorkout);
  }
  totalWorkoutDuration() {
    return 180;
  }
}

export class MockRouter {
  navigate = jasmine.createSpy('navigate');
}

describe('WorkoutRunnerComponent', () => {

  let component: WorkoutRunnerComponent;
  let fixture: ComponentFixture<WorkoutRunnerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({

      declarations: [WorkoutRunnerComponent, SecondToPipePipe],
      providers: [

        { provide: Router, useClass: MockRouter },
        { provide: WorkoutHistoryTrackerService, useClass: MockWorkoutHistoryTracker },

      ],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents()
    .then(() => {

      fixture = TestBed.createComponent(WorkoutRunnerComponent);
      component = fixture.componentInstance;
    });

  }));
/*
  beforeEach(() => {
    fixture = TestBed.createComponent(WorkoutRunnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
 */
  it('should create', () => {

    expect(component).toBeTruthy();
  });
});
