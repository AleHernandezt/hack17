import { Component, OnInit, NgZone } from '@angular/core';
import { BtnComponent } from '../../../Shared/btn/btn.component';
import { TableComponent } from '../../../Shared/table/table.component';
import { Table2Component } from '../../../Shared/table2/table2.component';
import { H1Component } from '../../../Shared/h1/h1.component';
import { SearchbarComponent } from '../../../Shared/searchbar/searchbar.component';
import { appSettings } from '../../../settings/appsettings';
import { getCookieHeader } from '../../../custom/getCookieHeader';
import { Router } from '@angular/router';

@Component({
  selector: 'app-gestion-paciente-vulnerable',
  standalone: true,
  imports: [
    H1Component,
    BtnComponent,
    TableComponent,
    Table2Component,
    SearchbarComponent,
  ],
  templateUrl: './gestion-paciente-vulnerable.component.html',
  styleUrls: ['./gestion-paciente-vulnerable.component.css'],
})
export default class GestionPacienteVulnerableComponent implements OnInit {
  pacientes: any[] = [];
  columnas: string[] = ['first_name', 'last_name', 'economic_status', 'vulnerability_level', 'phone', 'address'];
  encabezados: string[] = ['Nombre', 'Apellido', 'Estado Económico', 'Nivel de Vulnerabilidad', 'Teléfono', 'Dirección'];

  constructor(private ngZone: NgZone, private router: Router) {}

  ngOnInit(): void {
    console.log('holi');
    this.getPacientes();
  }

  getPacientes() {
    const { headers } = getCookieHeader();
    fetch(`${appSettings.apiUrl}patient/getPriorityPatients`, {
      method: 'GET',
      headers: headers,
    })
      .then((response) => response.json())
      .then((json) => {
        console.log(json); // <--- Agrega esta línea para imprimir los datos en la consola
        this.ngZone.run(() => {
          this.pacientes = json.data.vulnerablePatients.slice(0, 20); // <--- Muestra los últimos 10 pacientes vulnerables
        });
      });
  }

  onView(paciente: any) {
    this.router.navigate(['/perfilPaciente', paciente.id_card]);
  }
}