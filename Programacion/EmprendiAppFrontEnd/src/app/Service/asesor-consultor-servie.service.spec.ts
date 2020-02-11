import { TestBed } from '@angular/core/testing';

import { AsesorConsultorServieService } from './asesor-consultor-servie.service';

describe('AsesorConsultorServieService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AsesorConsultorServieService = TestBed.get(AsesorConsultorServieService);
    expect(service).toBeTruthy();
  });
});
