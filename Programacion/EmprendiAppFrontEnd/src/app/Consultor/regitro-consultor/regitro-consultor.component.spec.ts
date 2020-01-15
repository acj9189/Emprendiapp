import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegitroConsultorComponent } from './regitro-consultor.component';

describe('RegitroConsultorComponent', () => {
  let component: RegitroConsultorComponent;
  let fixture: ComponentFixture<RegitroConsultorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegitroConsultorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegitroConsultorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
