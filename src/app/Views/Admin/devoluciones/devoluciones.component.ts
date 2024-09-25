import { Component } from '@angular/core';
import { H1Component } from "../../../Shared/h1/h1.component";
import { BtnComponent } from "../../../Shared/btn/btn.component";
import { SearchbarComponent } from "../../../Shared/searchbar/searchbar.component";
import { Table2Component } from "../../../Shared/table2/table2.component";

@Component({
  selector: 'app-devoluciones',
  standalone: true,
  imports: [H1Component, BtnComponent, SearchbarComponent, Table2Component],
  templateUrl: './devoluciones.component.html',
  styleUrl: './devoluciones.component.css'
})
export default class DevolucionesComponent {
  devoluciones = [
    {
      patient_id: 2,
      treatment_id: 2,
      appointment_date: new Date('2024-09-25'),
      withdrawal_date: new Date('2024-09-26'),
      expiration_date: new Date('2024-12-31'),
      medications: [
        {
          medication_id: 1,
          quantity: 2
        }
      ]
    },
    {
      patient_id: 3,
      treatment_id: 3,
      appointment_date: new Date('2024-10-01'),
      withdrawal_date: new Date('2024-10-02'),
      expiration_date: new Date('2024-12-31'),
      medications: [
        {
          medication_id: 2,
          quantity: 3
        }
      ]
    }
  ];

  editDevolucion(devolucion: any) {
    alert(devolucion.patient_id);
  }

  deleteDevolucion(devolucion: any) {
    alert(devolucion.patient_id);
  }
}
