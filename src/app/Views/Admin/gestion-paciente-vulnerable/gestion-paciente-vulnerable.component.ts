import { Component, OnInit, NgZone } from '@angular/core';
import { BtnComponent } from "../../../Shared/btn/btn.component";
import { TableComponent } from "../../../Shared/table/table.component";
import { Table2Component } from "../../../Shared/table2/table2.component";
import { H1Component } from '../../../Shared/h1/h1.component';
import { SearchbarComponent } from "../../../Shared/searchbar/searchbar.component";

@Component({
  selector: 'app-gestion-paciente-vulnerable',
  standalone: true,
  imports: [H1Component, BtnComponent, TableComponent, Table2Component, SearchbarComponent],
  templateUrl: './gestion-paciente-vulnerable.component.html',
  styleUrls: ['./gestion-paciente-vulnerable.component.css']
})
export default class GestionPacienteVulnerableComponent implements OnInit {

  pacientes: any[] = [];

  constructor(private ngZone: NgZone) { }

  ngOnInit(): void {
    console.log("holi");
    this.getPacientes();
  }

  getPacientes() {
    fetch('http://localhost:3000/api/patient/getPriorityPatients')
      .then((response) => response.json())
      .then((json) => {
        console.log(json); // <--- Agrega esta línea para imprimir los datos en la consola
        this.ngZone.run(() => {
          this.pacientes = json.data.vulnerablePatients.slice(-10); // <--- Muestra los últimos 10 pacientes vulnerables
        });
      });
  }

  editPaciente(paciente: any) {
    alert(paciente.first_name);
  }

  deletePaciente(paciente: any) {
    alert(paciente.first_name);
  }
}