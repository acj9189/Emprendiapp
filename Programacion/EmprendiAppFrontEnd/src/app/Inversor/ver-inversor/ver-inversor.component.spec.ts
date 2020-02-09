import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerInversorComponent } from './ver-inversor.component';

describe('VerInversorComponent', () => {
  let component: VerInversorComponent;
  let fixture: ComponentFixture<VerInversorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerInversorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerInversorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
