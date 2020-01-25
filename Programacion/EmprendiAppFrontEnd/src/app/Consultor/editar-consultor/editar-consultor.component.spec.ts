import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarConsultorComponent } from './editar-consultor.component';

describe('EditarConsultorComponent', () => {
  let component: EditarConsultorComponent;
  let fixture: ComponentFixture<EditarConsultorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditarConsultorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarConsultorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
