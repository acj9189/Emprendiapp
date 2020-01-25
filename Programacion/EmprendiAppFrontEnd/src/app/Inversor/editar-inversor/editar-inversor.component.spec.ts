import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarInversorComponent } from './editar-inversor.component';

describe('EditarInversorComponent', () => {
  let component: EditarInversorComponent;
  let fixture: ComponentFixture<EditarInversorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditarInversorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarInversorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
