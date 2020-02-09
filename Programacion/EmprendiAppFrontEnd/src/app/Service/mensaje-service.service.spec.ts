import { TestBed } from '@angular/core/testing';

import { MensajeServiceService } from './mensaje-service.service';

describe('MensajeServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MensajeServiceService = TestBed.get(MensajeServiceService);
    expect(service).toBeTruthy();
  });
});
