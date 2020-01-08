import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroAesorComponent } from './registro-aesor.component';

describe('RegistroAesorComponent', () => {
  let component: RegistroAesorComponent;
  let fixture: ComponentFixture<RegistroAesorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistroAesorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistroAesorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
