import { Routes } from '@angular/router';

export const routes: Routes = [
    /*{
        path: '',
        loadComponent: () => import('./Authentication/login/login.component')
    },*/
    {
        path: '',
        loadComponent: () => import('./Views/Admin/dash-admin/dash-admin.component')
    },
    //   {
    //     path: 'dashboardDonor',
    //     loadComponent: () => import('./Views//Donor/dashboard-donor/dashboard-donor.component')
    //   },
    {
        path: 'crearCategoria',
        loadComponent: () => import('./Views/Admin/form-categoria/form-categoria.component')
    },

    {
        path: 'crearComunidad',
        loadComponent: () => import('./Views/Admin/form-comunidad/form-comunidad.component')
    },

    {
        path: 'crearMedicina',
        loadComponent: () => import('./Views/Admin/form-medicina/form-medicina.component')
    },
    {
        path: 'crearPaciente',
        loadComponent: () => import('./Views/Admin/form-paciente/form-paciente.component')
    },
    {
        path: 'crearTratamiento',
        loadComponent: () => import('./Views/Admin/form-tratamiento/form-tratamiento.component')
    },

    //   {
    //     path: 'patientTable',
    //     loadComponent: () => import('./Views/Admin/Patient/patient-table/patient-table.component')
    //   },
    {
        path: 'gestionCategoria',
        loadComponent: () => import('./Views/Admin/gestion-categoria/gestion-categoria.component')
    },
    {
        path: 'gestionComunidad',
        loadComponent: () => import('./Views/Admin/gestion-comunidad/gestion-comunidad.component')
    },

    {
        path: 'gestionFundacion',
        loadComponent: () => import('./Views/Admin/gestion-fundacion/gestion-fundacion.component')
    },

];
