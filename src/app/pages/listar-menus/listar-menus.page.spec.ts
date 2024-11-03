import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListarMenusPage } from './listar-menus.page';

describe('ListarMenusPage', () => {
  let component: ListarMenusPage;
  let fixture: ComponentFixture<ListarMenusPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarMenusPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
