import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroInversorComponent } from './registro-inversor.component';

describe('RegistroInversorComponent', () => {
  let component: RegistroInversorComponent;
  let fixture: ComponentFixture<RegistroInversorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistroInversorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistroInversorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
