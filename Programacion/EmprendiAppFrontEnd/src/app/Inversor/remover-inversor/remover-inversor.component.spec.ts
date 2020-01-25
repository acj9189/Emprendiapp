import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoverInversorComponent } from './remover-inversor.component';

describe('RemoverInversorComponent', () => {
  let component: RemoverInversorComponent;
  let fixture: ComponentFixture<RemoverInversorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RemoverInversorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RemoverInversorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
