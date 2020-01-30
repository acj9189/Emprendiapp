import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarSocioComponent } from './listar-socio.component';

describe('ListarSocioComponent', () => {
  let component: ListarSocioComponent;
  let fixture: ComponentFixture<ListarSocioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarSocioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarSocioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
