import { TestBed } from '@angular/core/testing';

import { ConvocatoriaServiceService } from './convocatoria-service.service';

describe('ConvocatoriaServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ConvocatoriaServiceService = TestBed.get(ConvocatoriaServiceService);
    expect(service).toBeTruthy();
  });
});
