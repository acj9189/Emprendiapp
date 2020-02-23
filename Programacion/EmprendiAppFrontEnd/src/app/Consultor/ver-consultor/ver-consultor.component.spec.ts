import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerConsultorComponent } from './ver-consultor.component';

describe('VerConsultorComponent', () => {
  let component: VerConsultorComponent;
  let fixture: ComponentFixture<VerConsultorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerConsultorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerConsultorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
