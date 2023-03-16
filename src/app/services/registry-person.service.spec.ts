import { TestBed } from '@angular/core/testing';

import { RegistryPersonService } from './registry-person.service';

describe('RegistryPersonService', () => {
  let service: RegistryPersonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RegistryPersonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
