import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'dashAdmin',
        loadComponent: () => import('./Views/Admin/dash-admin/dash-admin.component')
    }

];
