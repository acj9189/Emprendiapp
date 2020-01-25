import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoverConsultorComponent } from './remover-consultor.component';

describe('RemoverConsultorComponent', () => {
  let component: RemoverConsultorComponent;
  let fixture: ComponentFixture<RemoverConsultorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RemoverConsultorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RemoverConsultorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
