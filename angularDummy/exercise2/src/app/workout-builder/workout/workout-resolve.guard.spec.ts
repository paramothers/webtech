import { TestBed, async, inject } from '@angular/core/testing';

import { WorkoutResolveGuard } from './workout-resolve.guard';

describe('WorkoutResolveGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WorkoutResolveGuard]
    });
  });

  it('should ...', inject([WorkoutResolveGuard], (guard: WorkoutResolveGuard) => {
    expect(guard).toBeTruthy();
  }));
});
