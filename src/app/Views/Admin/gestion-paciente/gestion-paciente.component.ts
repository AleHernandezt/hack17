import { Component } from '@angular/core';
import { H1Component } from "../../../Shared/h1/h1.component";
import { BtnComponent } from "../../../Shared/btn/btn.component";
import { SearchbarComponent } from "../../../Shared/searchbar/searchbar.component";
import { Table2Component } from "../../../Shared/table2/table2.component";

@Component({
  selector: 'app-gestion-paciente',
  standalone: true,
  imports: [H1Component, BtnComponent, SearchbarComponent, Table2Component],
  templateUrl: './gestion-paciente.component.html',
  styleUrl: './gestion-paciente.component.css'
})
export default class GestionPacienteComponent {
  pacientes = [
    {
      id: 1,
      first_name: 'Paciente 1',
      last_name: 'Apellido 1',
      birth_date: new Date('2000-01-01'),
      email: 'paciente1@gmail.com',
      id_card: 12345678,
      phone: '0412123456',
      address: 'Dirección 1',
      gender: 'Masculino',
      vulnerability_level: 'Bajo',
      economic_status: 'Clase media',
      community_id: 1,
      pathologies: [
        {
          id_pathology: 1,
          description: 'Patología 1'
        }
      ]
    },
    {
      id: 2,
      first_name: 'Paciente 2',
      last_name: 'Apellido 2',
      birth_date: new Date('2001-02-02'),
      email: 'paciente2@gmail.com',
      id_card: 23456789,
      phone: '0412345678',
      address: 'Dirección 2',
      gender: 'Femenino',
      vulnerability_level: 'Medio',
      economic_status: 'Clase alta',
      community_id: 2,
      pathologies: [
        {
          id_pathology: 2,
          description: 'Patología 2'
        }
      ]
    }
  ];

  editPaciente(paciente: any) {
    alert(paciente.id);
  }

  deletePaciente(paciente: any) {
    alert(paciente.id);
  }

}
