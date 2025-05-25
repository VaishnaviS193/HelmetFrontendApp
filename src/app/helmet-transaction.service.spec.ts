import { TestBed } from '@angular/core/testing';

import { HelmetTransactionService } from './helmet-transaction.service';

describe('HelmetTransactionService', () => {
  let service: HelmetTransactionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HelmetTransactionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
