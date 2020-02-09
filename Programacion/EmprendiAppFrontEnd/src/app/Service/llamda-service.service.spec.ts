import { TestBed } from '@angular/core/testing';

import { LlamdaServiceService } from './llamda-service.service';

describe('LlamdaServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LlamdaServiceService = TestBed.get(LlamdaServiceService);
    expect(service).toBeTruthy();
  });
});
