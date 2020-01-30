import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarInversorComponent } from './listar-inversor.component';

describe('ListarInversorComponent', () => {
  let component: ListarInversorComponent;
  let fixture: ComponentFixture<ListarInversorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarInversorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarInversorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
