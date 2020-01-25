import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarSocioComponent } from './editar-socio.component';

describe('EditarSocioComponent', () => {
  let component: EditarSocioComponent;
  let fixture: ComponentFixture<EditarSocioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditarSocioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarSocioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
