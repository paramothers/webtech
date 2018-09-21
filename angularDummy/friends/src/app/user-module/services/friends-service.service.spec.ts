import { TestBed, inject } from '@angular/core/testing';

import { FriendsServiceService } from './friends-service.service';

describe('FriendsServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FriendsServiceService]
    });
  });

  it('should be created', inject([FriendsServiceService], (service: FriendsServiceService) => {
    expect(service).toBeTruthy();
  }));
});
