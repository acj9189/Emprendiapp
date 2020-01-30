import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarAsesorComponent } from './listar-asesor.component';

describe('ListarAsesorComponent', () => {
  let component: ListarAsesorComponent;
  let fixture: ComponentFixture<ListarAsesorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarAsesorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarAsesorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
