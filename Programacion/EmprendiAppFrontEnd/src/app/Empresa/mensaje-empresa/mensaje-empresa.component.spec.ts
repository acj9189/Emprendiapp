import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MensajeEmpresaComponent } from './mensaje-empresa.component';

describe('MensajeEmpresaComponent', () => {
  let component: MensajeEmpresaComponent;
  let fixture: ComponentFixture<MensajeEmpresaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MensajeEmpresaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MensajeEmpresaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
