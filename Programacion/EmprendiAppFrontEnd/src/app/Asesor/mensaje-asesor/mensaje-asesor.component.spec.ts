import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MensajeAsesorComponent } from './mensaje-asesor.component';

describe('MensajeAsesorComponent', () => {
  let component: MensajeAsesorComponent;
  let fixture: ComponentFixture<MensajeAsesorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MensajeAsesorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MensajeAsesorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
