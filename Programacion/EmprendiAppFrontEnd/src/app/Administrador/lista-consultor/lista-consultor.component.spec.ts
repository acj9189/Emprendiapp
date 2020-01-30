import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaConsultorComponent } from './lista-consultor.component';

describe('ListaConsultorComponent', () => {
  let component: ListaConsultorComponent;
  let fixture: ComponentFixture<ListaConsultorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaConsultorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaConsultorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
