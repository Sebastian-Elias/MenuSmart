import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AgregarMenusPage } from './agregar-menus.page';

describe('AgregarMenusPage', () => {
  let component: AgregarMenusPage;
  let fixture: ComponentFixture<AgregarMenusPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregarMenusPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
