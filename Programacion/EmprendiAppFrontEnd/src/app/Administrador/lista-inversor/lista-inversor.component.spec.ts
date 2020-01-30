import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaInversorComponent } from './lista-inversor.component';

describe('ListaInversorComponent', () => {
  let component: ListaInversorComponent;
  let fixture: ComponentFixture<ListaInversorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaInversorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaInversorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
