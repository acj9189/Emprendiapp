import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuInversorComponent } from './menu-inversor.component';

describe('MenuInversorComponent', () => {
  let component: MenuInversorComponent;
  let fixture: ComponentFixture<MenuInversorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuInversorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuInversorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
