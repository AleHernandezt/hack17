// gestion-paciente.component.ts
import { Component, OnInit } from '@angular/core';
import { H1Component } from '../../../Shared/h1/h1.component';
import { BtnComponent } from '../../../Shared/btn/btn.component';
import { SearchbarComponent } from '../../../Shared/searchbar/searchbar.component';
import { Table2Component } from '../../../Shared/table2/table2.component';
import { NgZone } from '@angular/core';
import { appSettings } from '../../../settings/appsettings';
import { getCookieHeader } from '../../../custom/getCookieHeader';
import { Router } from '@angular/router';

@Component({
  selector: 'app-gestion-paciente',
  standalone: true,
  imports: [H1Component, BtnComponent, SearchbarComponent, Table2Component],
  templateUrl: './gestion-paciente.component.html',
  styleUrls: ['./gestion-paciente.component.css'],
})
export default class GestionPacienteComponent implements OnInit {
  pacientes: any[] = [];
  constructor(private ngZone: NgZone, private router: Router) {}

  ngOnInit(): void {
    console.log('dios');

    this.getPost();
  }

  getPost() {
    const { headers } = getCookieHeader();
    fetch(`${appSettings.apiUrl}patient/getAll`, {
      method: 'GET',
      headers: headers,
    })
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        if (
          json &&
          json.data &&
          json.data.Patients &&
          Array.isArray(json.data.Patients)
        ) {
          const pacientesOrdenados = json.data.Patients.sort((a: { id: number; }, b: { id: number; }) => b.id - a.id);
          this.ngZone.run(() => {
            this.pacientes = pacientesOrdenados.slice(0, 10); // Obtener los últimos 10 elementos
          });
        } else {
          console.error('La API no devolvió un arreglo de pacientes');
        }
      });
  }

  editPaciente(paciente: any) {
    alert(paciente.id);
  }

  deletePaciente(paciente: any) {
    alert(paciente.id);
  }

  onView(paciente: any) {
    this.router.navigate(['perfilPaciente/', paciente.id_card]);
  }
}