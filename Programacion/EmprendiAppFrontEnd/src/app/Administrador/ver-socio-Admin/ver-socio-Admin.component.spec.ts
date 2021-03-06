import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerSocioAdminComponent } from './ver-socio-admin.component';

describe('VerSocioAdminComponent', () => {
  let component: VerSocioAdminComponent;
  let fixture: ComponentFixture<VerSocioAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerSocioAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerSocioAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
