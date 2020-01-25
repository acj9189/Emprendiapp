import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoverSocioComponent } from './remover-socio.component';

describe('RemoverSocioComponent', () => {
  let component: RemoverSocioComponent;
  let fixture: ComponentFixture<RemoverSocioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RemoverSocioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RemoverSocioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
