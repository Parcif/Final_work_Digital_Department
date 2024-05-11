import { TestBed } from '@angular/core/testing';

import { SubwooferService } from './subwooferservice.service';

describe('SubwooferService', () => {
  let service: SubwooferService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SubwooferService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
