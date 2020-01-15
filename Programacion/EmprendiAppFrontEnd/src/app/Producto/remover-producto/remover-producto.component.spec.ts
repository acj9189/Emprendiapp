import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoverProductoComponent } from './remover-producto.component';

describe('RemoverProductoComponent', () => {
  let component: RemoverProductoComponent;
  let fixture: ComponentFixture<RemoverProductoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RemoverProductoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RemoverProductoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
