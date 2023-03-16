import { TestBed } from '@angular/core/testing';

import { HoobiesServiceService } from './hoobies-service.service';

describe('HoobiesServiceService', () => {
  let service: HoobiesServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HoobiesServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
