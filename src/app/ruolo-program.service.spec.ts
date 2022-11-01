import { TestBed } from '@angular/core/testing';

import { RuoloProgramService } from './ruolo-program.service';

describe('RuoloProgramService', () => {
  let service: RuoloProgramService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RuoloProgramService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
