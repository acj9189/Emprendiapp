import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MensajeConsultorComponent } from './mensaje-consultor.component';

describe('MensajeConsultorComponent', () => {
  let component: MensajeConsultorComponent;
  let fixture: ComponentFixture<MensajeConsultorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MensajeConsultorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MensajeConsultorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
