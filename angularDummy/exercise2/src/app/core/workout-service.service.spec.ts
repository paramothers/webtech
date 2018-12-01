import { TestBed, inject } from '@angular/core/testing';

import { WorkoutService } from './workout.service';

describe('WorkoutServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WorkoutService]
    });
  });

  it('should be created', inject([WorkoutService], (service: WorkoutService) => {
    expect(service).toBeTruthy();
  }));
});
