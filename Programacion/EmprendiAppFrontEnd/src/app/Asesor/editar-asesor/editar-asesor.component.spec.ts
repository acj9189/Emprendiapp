import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarAsesorComponent } from './editar-asesor.component';

describe('EditarAsesorComponent', () => {
  let component: EditarAsesorComponent;
  let fixture: ComponentFixture<EditarAsesorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditarAsesorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarAsesorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
