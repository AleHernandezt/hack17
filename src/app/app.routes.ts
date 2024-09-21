import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'dashboardAdmin',
        loadComponent: () => import('./Views/Admin/dash-admin/dash-admin.component')
    },
    //   {
    //     path: 'dashboardDonor',
    //     loadComponent: () => import('./Views//Donor/dashboard-donor/dashboard-donor.component')
    //   },
    //   {
    //     path: 'patient',
    //     loadComponent: () => import('./Views/Admin/Patient/patient-form/patient-form.component')
    //   },
    //   {
    //     path: 'patientTable',
    //     loadComponent: () => import('./Views/Admin/Patient/patient-table/patient-table.component')
    //   },
    {
        path: 'gestionComunidad',
        loadComponent: () => import('./Views/Admin/gestion-comunidad/gestion-comunidad.component')
    },

    {
        path: 'gestionCategoria',
        loadComponent: () => import('./Views/Admin/gestion-categoria/gestion-categoria.component')
    },

    {
        path: 'gestionFundacion',
        loadComponent: () => import('./Views/Admin/gestion-fundacion/gestion-fundacion.component')
    },

];
