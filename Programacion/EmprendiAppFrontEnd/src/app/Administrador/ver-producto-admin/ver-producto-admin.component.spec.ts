import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerProductoAdminComponent } from './ver-producto-admin.component';

describe('VerProductoAdminComponent', () => {
  let component: VerProductoAdminComponent;
  let fixture: ComponentFixture<VerProductoAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerProductoAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerProductoAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
