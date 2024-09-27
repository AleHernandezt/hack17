import { Component, inject, OnInit } from '@angular/core';
import { SidebarModule } from 'primeng/sidebar';
import { ButtonModule } from 'primeng/button';
import { MenuItem } from 'primeng/api';
import { PanelMenuModule } from 'primeng/panelmenu';
import { Router } from '@angular/router';
import { AccesoService } from '../../Core/Services/auth.service';
import { deleteCookie } from '../../Authentication/login/cookies';

@Component({
  selector: 'app-side2',
  standalone: true,
  imports: [SidebarModule, ButtonModule, PanelMenuModule],
  templateUrl: './side2.component.html',
  styleUrl: './side2.component.css',
})
export class Side2Component implements OnInit {
  sidebarVisible: boolean = false;
  items: MenuItem[] | undefined;
  logoutItem: MenuItem | undefined;
  private accesoService = inject(AccesoService);

  constructor(private router: Router) {}
  ngOnInit() {
    this.items = [
      {
        label: 'Gestion',
        icon: 'pi pi-file',
        items: [
          {
            label: 'Paciente',
            icon: 'pi pi-mobile',
            items: [
              {
                label: 'General',
                icon: 'pi pi-mobile',
                command: () => this.navigateToRoute('/gestionPaciente'),
              },
              {
                label: 'Tratamiento',
                icon: 'pi pi-mobile',
                command: () => this.navigateToRoute('/crearTratamiento'),
              },
              {
                label: 'Vulnerable',
                icon: 'pi pi-mobile',
                command: () => this.navigateToRoute('/'),
              },
            ],
          },
          {
            label: 'Donante',
            icon: 'pi pi-file',
            items: [
              {
                label: 'General',
                icon: 'pi pi-file',
                command: () => this.navigateToRoute('/'),
              },
              {
                label: 'Categorias',
                icon: 'pi pi-file',
                command: () => this.navigateToRoute('/gestionCategoria'),
              },
              {
                label: 'Estadisticas',
                icon: 'pi pi-file',
                command: () => this.navigateToRoute('/'),
              },
              {
                label: 'Lotes',
                icon: 'pi pi-file',
                command: () => this.navigateToRoute('/'),
              },
            ],
          },
          {
            label: 'Donativo',
            icon: 'pi pi-file',
            items: [
              {
                label: 'General',
                icon: 'pi pi-file',
                command: () => this.navigateToRoute('/crearDonacion'),
              },
              {
                label: 'Estadisticas',
                icon: 'pi pi-file',
                command: () => this.navigateToRoute('/'),
              },
            ],
          },
          {
            label: 'Medicamentos',
            icon: 'pi pi-file',
            items: [
              {
                label: 'General',
                icon: 'pi pi-file',
                command: () => this.navigateToRoute('/gestionMedicamentos'),
              },
              {
                label: 'Desecho',
                icon: 'pi pi-file',
                command: () => this.navigateToRoute('/gestionCategoria'),
              },
              {
                label: 'Estadisticas',
                icon: 'pi pi-file',
                command: () => this.navigateToRoute('/'),
              },
            ],
          },

          {
            label: 'Patologia',
            icon: 'pi pi-file',
            command: () => this.navigateToRoute('/gestionPatologia'),
          },
          {
            label: 'Comunidades',
            icon: 'pi pi-file',
            command: () => this.navigateToRoute('/gestionComunidad'),
          },
          {
            label: 'Usuarios',
            icon: 'pi pi-file',
            command: () => this.navigateToRoute('/Cesar'),
          },
        ],
      },

      {
        label: 'Entrega',
        icon: 'pi pi-file',
        items: [
          {
            label: 'General',
            icon: 'pi pi-file',
            command: () => this.navigateToRoute('/gestionMedicamentos'),
          },
          {
            label: 'Devolucion',
            icon: 'pi pi-file',
            command: () => this.navigateToRoute('/gestionDevoluciones'),
          },
          {
            label: 'Estadisticas',
            icon: 'pi pi-file',
            command: () => this.navigateToRoute('/'),
          },
        ],
      },
    ];

    this.logoutItem = {
      label: 'Logout',
      icon: 'pi pi-sign-out',
      command: () => this.logout(),
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
    this.accesoService.logout().subscribe({
      next: (response) => {
        deleteCookie('access_token');
        this.closeSidebar();
        this.router.navigate(['/']);
        console.log(response);
      },
      error: (error) => {
        console.log('Error al cerrar sesión:', error);
      },
    });
  }
}
