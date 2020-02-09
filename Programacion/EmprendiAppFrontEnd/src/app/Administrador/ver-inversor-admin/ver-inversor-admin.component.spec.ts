import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerInversorAdminComponent } from './ver-inversor-admin.component';

describe('VerInversorAdminComponent', () => {
  let component: VerInversorAdminComponent;
  let fixture: ComponentFixture<VerInversorAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerInversorAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerInversorAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
