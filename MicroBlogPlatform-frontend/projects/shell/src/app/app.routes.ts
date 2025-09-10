import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'user',
    loadChildren: () => import('user/Module').then(m => m.UserModule)
  },
  {
    path: 'admin',
    loadChildren: () => import('admin/Module').then(m => m.AdminModule)
  }
];