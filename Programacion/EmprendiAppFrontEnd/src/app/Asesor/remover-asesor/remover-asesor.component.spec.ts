import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoverAsesorComponent } from './remover-asesor.component';

describe('RemoverAsesorComponent', () => {
  let component: RemoverAsesorComponent;
  let fixture: ComponentFixture<RemoverAsesorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RemoverAsesorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RemoverAsesorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
