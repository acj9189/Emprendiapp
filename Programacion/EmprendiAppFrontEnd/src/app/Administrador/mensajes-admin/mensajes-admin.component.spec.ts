import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MensajesAdminComponent } from './mensajes-admin.component';

describe('MensajesAdminComponent', () => {
  let component: MensajesAdminComponent;
  let fixture: ComponentFixture<MensajesAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MensajesAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MensajesAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
