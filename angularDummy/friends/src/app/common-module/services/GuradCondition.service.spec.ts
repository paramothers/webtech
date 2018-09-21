/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { GuradConditionService } from './GuradCondition.service';

describe('Service: GuradCondition', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GuradConditionService]
    });
  });

  it('should ...', inject([GuradConditionService], (service: GuradConditionService) => {
    expect(service).toBeTruthy();
  }));
});
