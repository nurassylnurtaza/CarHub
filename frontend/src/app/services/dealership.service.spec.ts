import { TestBed } from '@angular/core/testing';

import { DealershipService } from './dealership.service';

describe('DealershipService', () => {
  let service: DealershipService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DealershipService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
