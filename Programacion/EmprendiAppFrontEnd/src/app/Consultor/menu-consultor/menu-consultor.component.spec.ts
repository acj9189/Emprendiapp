import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuConsultorComponent } from './menu-consultor.component';

describe('MenuConsultorComponent', () => {
  let component: MenuConsultorComponent;
  let fixture: ComponentFixture<MenuConsultorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuConsultorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuConsultorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
