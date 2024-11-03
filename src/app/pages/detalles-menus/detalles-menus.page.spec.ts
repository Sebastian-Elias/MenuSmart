import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DetallesMenusPage } from './detalles-menus.page';

describe('DetallesMenusPage', () => {
  let component: DetallesMenusPage;
  let fixture: ComponentFixture<DetallesMenusPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DetallesMenusPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
