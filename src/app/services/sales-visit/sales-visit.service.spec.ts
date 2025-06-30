import { TestBed } from '@angular/core/testing';

import { SalesVisitService } from './sales-visit.service';

describe('SalesVisitService', () => {
  let service: SalesVisitService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SalesVisitService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
