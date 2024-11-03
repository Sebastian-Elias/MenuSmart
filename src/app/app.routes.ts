import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'listar-menus',
    loadComponent: () => import('./pages/listar-menus/listar-menus.page').then( m => m.ListarMenusPage)
  },
  {
    path: 'agregar-menus',
    loadComponent: () => import('./pages/agregar-menus/agregar-menus.page').then( m => m.AgregarMenusPage)
  },
  {
    path: 'editar-menus',
    loadComponent: () => import('./pages/editar-menus/editar-menus.page').then( m => m.EditarMenusPage)
  },
  {
    path: 'detalles-menus',
    loadComponent: () => import('./pages/detalles-menus/detalles-menus.page').then( m => m.DetallesMenusPage)
  },
];
