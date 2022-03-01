import { TestBed } from '@angular/core/testing';

import { ConversionPoidsService } from './conversion-poids.service';

describe('ConversionPoidsService', () => {
  let service: ConversionPoidsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConversionPoidsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
