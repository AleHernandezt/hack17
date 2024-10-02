import { Component, inject, OnInit } from '@angular/core';
import { SidebarModule } from 'primeng/sidebar';
import { ButtonModule } from 'primeng/button';
import { MenuItem } from 'primeng/api';
import { PanelMenuModule } from 'primeng/panelmenu';
import { Router } from '@angular/router';
import { AccesoService } from '../../Core/Services/auth.service';
import { deleteCookie } from '../../Authentication/login/cookies';
import { getUserInfoFromToken } from '../../custom/getJwtInfo';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-side2',
  standalone: true,
  imports: [SidebarModule, ButtonModule, PanelMenuModule, CommonModule],
  templateUrl: './side2.component.html',
  styleUrl: './side2.component.css',
})
export class Side2Component implements OnInit {
  sidebarVisible: boolean = false;
  menuVisible: boolean = false;
  name: string = 'Usuario';
  items: MenuItem[] | undefined;
  logoutItem: MenuItem | undefined;
  private accesoService = inject(AccesoService);

  constructor(private router: Router) {}
  ngOnInit() {
    const { name, userType } = getUserInfoFromToken();
    userType === 'donor'
      ? (this.menuVisible = false)
      : (this.menuVisible = true);
    this.name = name;

    this.items = [
      {
        label: 'Gestión',
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
                command: () =>
                  this.navigateToRoute('/gestionPacienteVulnerable'),
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
                command: () => this.navigateToRoute('/gestionDonante'),
              },
              {
                label: 'Categorias',
                icon: 'pi pi-file',
                command: () => this.navigateToRoute('/gestionCategoria'),
              },
              {
                label: 'Estadisticas',
                icon: 'pi pi-file',
                command: () => this.navigateToRoute('/DashboardDoner'),
              },
              {
                label: 'Lotes',
                icon: 'pi pi-file',
                command: () => this.navigateToRoute('/gestionLotes'),
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
                command: () => this.navigateToRoute('gestionDonativo'),
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
                command: () => this.navigateToRoute('/gestionDesecho'),
              },
              {
                label: 'Estadisticas',
                icon: 'pi pi-file',
                command: () => this.navigateToRoute('/dashboardMedicinas'),
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
            command: () => this.navigateToRoute('/User'),
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
            command: () => this.navigateToRoute('/gestionEntrega'),
          },
          {
            label: 'Entregado',
            icon: 'pi pi-file',
            command: () => this.navigateToRoute('/gestionEntregado'),
          },
          {
            label: 'Expirado',
            icon: 'pi pi-file',
            command: () => this.navigateToRoute('/gestionExpirado'),
          },
          {
            label: 'Estadisticas',
            icon: 'pi pi-file',
            command: () => this.navigateToRoute('/dashboardEntregas'),
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
  goToDashboard() {
    this.closeSidebar();
    this.router.navigate(['/DashboardDoner']);
  }
}
