import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerAsesorComponent } from './ver-asesor.component';

describe('VerAsesorComponent', () => {
  let component: VerAsesorComponent;
  let fixture: ComponentFixture<VerAsesorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerAsesorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerAsesorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
