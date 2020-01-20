import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoverAdministradorComponent } from './remover-administrador.component';

describe('RemoverAdministradorComponent', () => {
  let component: RemoverAdministradorComponent;
  let fixture: ComponentFixture<RemoverAdministradorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RemoverAdministradorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RemoverAdministradorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
