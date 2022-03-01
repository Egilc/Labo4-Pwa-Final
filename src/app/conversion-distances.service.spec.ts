import { TestBed } from '@angular/core/testing';

import { ConversionDistancesService } from './conversion-distances.service';

describe('ConversionDistancesService', () => {
  let service: ConversionDistancesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConversionDistancesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
