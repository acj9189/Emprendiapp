import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerAsesorAdminComponent } from './ver-asesor-admin.component';

describe('VerAsesorAdminComponent', () => {
  let component: VerAsesorAdminComponent;
  let fixture: ComponentFixture<VerAsesorAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerAsesorAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerAsesorAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
