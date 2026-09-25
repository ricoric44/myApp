import { Routes } from '@angular/router';

/**
 * Routing (equivalente a las routes del backend Node.js).
 * Proyecto standalone: se usa loadComponent (carga diferida) en lugar de loadChildren + módulos.
 */
export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: 'users',
    loadComponent: () => import('./pages/users/users.page').then((m) => m.UsersPage),
  },
  {
    path: 'usuarios',
    redirectTo: 'users',
    pathMatch: 'full',
  },
  {
    path: 'users/:id',
    loadComponent: () =>
      import('./pages/user-detail/user-detail.page').then((m) => m.UserDetailPage),
  },
  {
    path: '',
    redirectTo: 'users',
    pathMatch: 'full',
  },
];
