import { TestBed, inject } from '@angular/core/testing';

import { ArsComponentsService } from './ars-components.service';

describe('ArsComponentsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ArsComponentsService]
    });
  });

  it('should be created', inject([ArsComponentsService], (service: ArsComponentsService) => {
    expect(service).toBeTruthy();
  }));
});
