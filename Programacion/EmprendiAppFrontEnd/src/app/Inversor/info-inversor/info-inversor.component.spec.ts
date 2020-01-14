import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoInversorComponent } from './info-inversor.component';

describe('InfoInversorComponent', () => {
  let component: InfoInversorComponent;
  let fixture: ComponentFixture<InfoInversorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoInversorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoInversorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
