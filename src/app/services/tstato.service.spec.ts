import { TestBed } from '@angular/core/testing';

import { TstatoService } from './tstato.service';

describe('TstatoService', () => {
  let service: TstatoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TstatoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
