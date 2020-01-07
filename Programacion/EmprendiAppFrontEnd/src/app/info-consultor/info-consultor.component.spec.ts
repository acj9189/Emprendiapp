import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoConsultorComponent } from './info-consultor.component';

describe('InfoConsultorComponent', () => {
  let component: InfoConsultorComponent;
  let fixture: ComponentFixture<InfoConsultorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoConsultorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoConsultorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
