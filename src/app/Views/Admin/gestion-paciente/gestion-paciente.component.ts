import { Component, OnInit } from '@angular/core';
import { H1Component } from '../../../Shared/h1/h1.component';
import { BtnComponent } from '../../../Shared/btn/btn.component';
import { SearchbarComponent } from '../../../Shared/searchbar/searchbar.component';
import { Table2Component } from '../../../Shared/table2/table2.component';
import { NgZone } from '@angular/core';
import { appSettings } from '../../../settings/appsettings';
import { getCookieHeader } from '../../../custom/getCookieHeader';

@Component({
  selector: 'app-gestion-paciente',
  standalone: true,
  imports: [H1Component, BtnComponent, SearchbarComponent, Table2Component],
  templateUrl: './gestion-paciente.component.html',
  styleUrl: './gestion-paciente.component.css',
})
export default class GestionPacienteComponent implements OnInit {
  pacientes: any[] = [];
  constructor(private ngZone: NgZone) {}

  ngOnInit(): void {
    console.log('dios');

    this.getPost();
  }

  getPost() {
    const { headers } = getCookieHeader();
    fetch(`${appSettings.apiUrl}patient/getAll/`, {
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
          this.ngZone.run(() => {
            this.pacientes = json.data.Patients.slice(0, 10);
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
}
