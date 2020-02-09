import { TestBed } from '@angular/core/testing';

import { PerfilSericeService } from './perfil-serice.service';

describe('PerfilSericeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PerfilSericeService = TestBed.get(PerfilSericeService);
    expect(service).toBeTruthy();
  });
});
