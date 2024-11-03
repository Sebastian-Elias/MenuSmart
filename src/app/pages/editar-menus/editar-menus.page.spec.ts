import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EditarMenusPage } from './editar-menus.page';

describe('EditarMenusPage', () => {
  let component: EditarMenusPage;
  let fixture: ComponentFixture<EditarMenusPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarMenusPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
