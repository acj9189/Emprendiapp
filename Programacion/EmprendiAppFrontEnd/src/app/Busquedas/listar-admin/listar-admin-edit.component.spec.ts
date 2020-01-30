import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarAdminEditComponent } from './listar-admin-edit.component';

describe('ListarAdminEditComponent', () => {
  let component: ListarAdminEditComponent;
  let fixture: ComponentFixture<ListarAdminEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarAdminEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarAdminEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
