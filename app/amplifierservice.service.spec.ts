import { TestBed } from '@angular/core/testing';

import { AmplifierService } from './amplifierservice.service';

describe('AmplifierService', () => {
  let service: AmplifierService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AmplifierService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
