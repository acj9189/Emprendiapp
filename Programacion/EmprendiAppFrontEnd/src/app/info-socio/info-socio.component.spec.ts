import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoSocioComponent } from './info-socio.component';

describe('InfoSocioComponent', () => {
  let component: InfoSocioComponent;
  let fixture: ComponentFixture<InfoSocioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoSocioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoSocioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
