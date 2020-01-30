import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarConsultorComponent } from './listar-consultor.component';

describe('ListarConsultorComponent', () => {
  let component: ListarConsultorComponent;
  let fixture: ComponentFixture<ListarConsultorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarConsultorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarConsultorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
