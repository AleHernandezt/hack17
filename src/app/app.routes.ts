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
    {
        path: 'crearDonacion',
        loadComponent: () => import('./Views/Admin/form-donacion/form-donacion.component')
    },
    {
        path: 'crearEntrega',
        loadComponent: () => import('./Views/Admin/form-entrega/form-entrega.component')
    },
    {
        path: 'crearPatologia',
        loadComponent: () => import('./Views/Admin/form-patologia/form-patologia.component')
    },

    {
        path: 'crearMedicamento',
        loadComponent: () => import('./Views/Admin/form-medicamentos/form-medicamentos.component')
    },


    {
        path: 'gestionCategoria',
        loadComponent: () => import('./Views/Admin/gestion-categoria/gestion-categoria.component')
    },
    {
        path: 'gestionComunidad',
        loadComponent: () => import('./Views/Admin/gestion-comunidad/gestion-comunidad.component')
    },

    {   // ?esta no esta siendo mostrada
        path: 'gestionFundacion',
        loadComponent: () => import('./Views/Admin/gestion-fundacion/gestion-fundacion.component')
    },
    {
        path: 'gestionEntrega',
        loadComponent: () => import('./Views/Admin/gestion-entrega/gestion-entrega.component')
    },
    {
        path: 'gestionPaciente',
        loadComponent: () => import('./Views/Admin/gestion-paciente/gestion-paciente.component')
    },

    {
        path: 'gestionMedicamentos',
        loadComponent: () => import('./Views/Admin/medicamentos/medicamentos.component')
    },

    {
        path: 'gestionDevoluciones',
        loadComponent: () => import('./Views/Admin/devoluciones/devoluciones.component')
    },
    {
        path: 'gestionPatologias',
        loadComponent: () => import('./Views/Admin/patologias/patologias.component')
    },

    //! esta no esta siendo mostrada
    {
        path: 'gestionPatologia',
        loadComponent: () => import('./Views/Admin/gestion-patologia/gestion-patologia.component')
    },
    {
        path: 'medicamentosEntrada',
        loadComponent: () => import('./Views/Admin/medicamentos-entrada/medicamentos-entrada.component')
    },
    {
        path: 'MedicamentosSalidaDonacion',
        loadComponent: () => import('./Views/Admin/medicamentos-salida-donacion/medicamentos-salida-donacion.component')
    },
    {
        path: 'MedicamentosSalidaOtro',
        loadComponent: () => import('./Views/Admin/medicamentos-salida-otro/medicamentos-salida-otro.component')
    },



    {
        path: 'DasboardAdmin',
        loadComponent: () => import('./Views/Admin/dash-admin/dash-admin.component')
    },
    {
        path: 'DashboardDoner',
        loadComponent: () => import('./Views/Doner/dasboard-doner/dasboard-doner.component')
    },
    {
        path: 'CrearDonante',
        loadComponent: () => import('./Views/Doner/form-donante/form-donante.component')
    },

];
