import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuAsesorComponent } from './menu-asesor.component';

describe('MenuAsesorComponent', () => {
  let component: MenuAsesorComponent;
  let fixture: ComponentFixture<MenuAsesorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuAsesorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuAsesorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
