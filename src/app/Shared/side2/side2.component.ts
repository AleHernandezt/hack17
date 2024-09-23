import { Component, OnInit } from '@angular/core';
import { SidebarModule } from 'primeng/sidebar';
import { ButtonModule } from 'primeng/button';
import { MenuItem } from 'primeng/api';
import { PanelMenuModule } from 'primeng/panelmenu';
import { Router } from '@angular/router'; // Import the Router service

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
                        items: [
                            {
                                label: 'Tratamientos',
                                icon: 'pi pi-file',
                                command: () => this.navigateToRoute('/dashboardAdmin')
                            },
                        ]
                    },
                    {
                        label: 'Comunidades',
                        icon: 'pi pi-file',
                        command: () => this.navigateToRoute('/paciente')
                    },
                    {
                        label: 'Patologia',
                        icon: 'pi pi-file',
                        command: () => this.navigateToRoute('/gestionComunidad')
                    },
                    {
                        label: 'Entrega',
                        icon: 'pi pi-desktop',
                        command: () => this.navigateToRoute('/route8')
                    },

                ]
            },
            // {
            //     label: 'Patologia',
            //     icon: 'pi pi-image',
            //     items: [
            //         {
            //             label: 'Option 1',
            //             icon: 'pi pi-image',
            //             command: () => this.navigateToRoute('/gestionComunidad')
            //         },
            //         {
            //             label: 'Option 2',
            //             icon: 'pi pi-image',
            //             command: () => this.navigateToRoute('/gestionCategoria')
            //         }
            //     ]
            // },
            // {
            //     label: 'Tratamientos',
            //     icon: 'pi pi-cloud',
            //     items: [
            //         {
            //             label: 'Option 1',
            //             icon: 'pi pi-cloud',
            //             command: () => this.navigateToRoute('/gestionFundacion')
            //         },
            //         {
            //             label: 'Option 2',
            //             icon: 'pi pi-cloud',
            //             command: () => this.navigateToRoute('/route6')
            //         }
            //     ]
            // },

            {
                label: 'Medicamentos',
                icon: 'pi pi-mobile',
                items: [
                    {
                        label: 'Entrada',
                        icon: 'pi pi-mobile',
                        command: () => this.navigateToRoute('/route9')
                    },
                    {
                        label: 'Salida',
                        icon: 'pi pi-mobile',
                        items: [
                            {
                                label: 'Donacion',
                                icon: 'pi pi-mobile',
                                command: () => this.navigateToRoute('/route9')
                            },
                            {
                                label: 'Otros Motivos',
                                icon: 'pi pi-mobile',
                                command: () => this.navigateToRoute('/route9')
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
                        command: () => this.navigateToRoute('/route9')
                    },
                    {
                        label: 'Estadisticas',
                        icon: 'pi pi-mobile',
                        command: () => this.navigateToRoute('/route10')
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