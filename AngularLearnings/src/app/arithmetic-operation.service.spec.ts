import { TestBed } from '@angular/core/testing';

import { ArithmeticOperationService } from './arithmetic-operation.service';

describe('ArithmeticOperationService', () => {
  let service: ArithmeticOperationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArithmeticOperationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
