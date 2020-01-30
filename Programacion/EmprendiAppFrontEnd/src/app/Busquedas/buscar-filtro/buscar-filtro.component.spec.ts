import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscarFiltroComponent } from './buscar-filtro.component';

describe('BuscarFiltroComponent', () => {
  let component: BuscarFiltroComponent;
  let fixture: ComponentFixture<BuscarFiltroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuscarFiltroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuscarFiltroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
