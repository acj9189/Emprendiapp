import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoAsesorComponent } from './info-asesor.component';

describe('InfoAsesorComponent', () => {
  let component: InfoAsesorComponent;
  let fixture: ComponentFixture<InfoAsesorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoAsesorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoAsesorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
