import { Component, OnInit } from '@angular/core';
import { SidebarModule } from 'primeng/sidebar';
import { ButtonModule } from 'primeng/button';
import { MenuItem } from 'primeng/api';
import { PanelMenuModule } from 'primeng/panelmenu';
import { Router } from '@angular/router'; 

@Component({
    selector: 'app-side2',
    standalone: true,
    imports: [SidebarModule, ButtonModule, PanelMenuModule],
    templateUrl: './side2.component.html',
    styleUrl: './side2.component.css'
})
export class Side2Component implements OnInit {
    sidebarVisible: boolean = false;
    items: MenuItem[] | undefined;
    logoutItem: MenuItem | undefined;

    constructor(private router: Router) { }
    ngOnInit() {
        this.items = [
            {
                label: 'Gestion',
                icon: 'pi pi-file',
                items: [
                    {
                        label: 'Paciente',
                        icon: 'pi pi-file',
                        command: () => this.navigateToRoute('/gestionPaciente')

                    },
                    {
                        label: 'Comunidades',
                        icon: 'pi pi-file',
                        command: () => this.navigateToRoute('/gestionComunidad')
                    },
                    {
                        label: 'Categoria',
                        icon: 'pi pi-file',
                        command: () => this.navigateToRoute('/gestionCategoria')
                    },
                    {
                        label: 'Patologia',
                        icon: 'pi pi-file',
                        command: () => this.navigateToRoute('/gestionPatologia')
                    },
                    {
                        label: 'Devoluciones',
                        icon: 'pi pi-file',
                        command: () => this.navigateToRoute('/gestionDevoluciones')

                    },

                ]
            },

            {
                label: 'Medicamentos',
                icon: 'pi pi-mobile',
                items: [
                    {
                        label: 'General',
                        icon: 'pi pi-file',
                        command: () => this.navigateToRoute('/gestionMedicamentos')
                    },
                    {
                        label: 'Entrada',
                        icon: 'pi pi-mobile',
                        command: () => this.navigateToRoute('/medicamentosEntrada')
                    },
                    {
                        label: 'Salida',
                        icon: 'pi pi-mobile',
                        items: [
                            {
                                label: 'Donacion',
                                icon: 'pi pi-mobile',
                                command: () => this.navigateToRoute('/MedicamentosSalidaDonacion')
                            },
                            {
                                label: 'Otros Motivos',
                                icon: 'pi pi-mobile',
                                command: () => this.navigateToRoute('/MedicamentosSalidaOtro')
                            },
                        ]
                    }
                ]
            },
            {
                label: 'Donantes',
                icon: 'pi pi-mobile',
                items: [
                    {
                        label: 'Crear',
                        icon: 'pi pi-mobile',
                        command: () => this.navigateToRoute('/CrearDonante')
                    },
                    {
                        label: 'Estadisticas',
                        icon: 'pi pi-mobile',
                        command: () => this.navigateToRoute('/DashboardDoner')
                    }
                ]
            }
        ];

        this.logoutItem = {
            label: 'Logout',
            icon: 'pi pi-sign-out',
            command: () => this.logout()
        };
    }

    navigateToRoute(route: string) {
        this.closeSidebar();
        this.router.navigate([route]);
    }

    closeSidebar() {
        this.sidebarVisible = false;
    }

    logout() {
        // Aquí puedes agregar la lógica para cerrar la sesión
        // Por ejemplo, puedes eliminar el token de autenticación
        // o redirigir al usuario a la página de login
        this.closeSidebar();
        this.router.navigate(['/login']);
    }
}