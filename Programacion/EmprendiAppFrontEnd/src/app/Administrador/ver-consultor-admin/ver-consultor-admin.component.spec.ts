import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerConsultorAdminComponent } from './ver-consultor-admin.component';

describe('VerConsultorAdminComponent', () => {
  let component: VerConsultorAdminComponent;
  let fixture: ComponentFixture<VerConsultorAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerConsultorAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerConsultorAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
