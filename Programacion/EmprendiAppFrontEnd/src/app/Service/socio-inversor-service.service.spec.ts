import { TestBed } from '@angular/core/testing';

import { SocioInversorServiceService } from './socio-inversor-service.service';

describe('SocioInversorServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SocioInversorServiceService = TestBed.get(SocioInversorServiceService);
    expect(service).toBeTruthy();
  });
});
