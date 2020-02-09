import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerEmpresaAdminComponent } from './ver-empresa-admin.component';

describe('VerEmpresaAdminComponent', () => {
  let component: VerEmpresaAdminComponent;
  let fixture: ComponentFixture<VerEmpresaAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerEmpresaAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerEmpresaAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
