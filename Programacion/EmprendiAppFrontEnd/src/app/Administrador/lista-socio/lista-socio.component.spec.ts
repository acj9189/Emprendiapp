import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaSocioComponent } from './lista-socio.component';

describe('ListaSocioComponent', () => {
  let component: ListaSocioComponent;
  let fixture: ComponentFixture<ListaSocioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaSocioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaSocioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
