import { Component } from '@angular/core';
import { BtnComponent } from "../../../Shared/btn/btn.component";
import { TableComponent } from "../../../Shared/table/table.component";
import { H1Component } from '../../../Shared/h1/h1.component';
import { SearchbarComponent } from "../../../Shared/searchbar/searchbar.component";
import { Table2Component } from "../../../Shared/table2/table2.component";

@Component({
  selector: 'app-medicamentos',
  standalone: true,
  imports: [H1Component, BtnComponent, TableComponent, SearchbarComponent, Table2Component],
  templateUrl: './medicamentos.component.html',
  styleUrl: './medicamentos.component.css'
})
export default class MedicamentosComponent {

  medicamentos = [
    {
      id: 1,
      nombreMedicina: 'Medicina A',
      cantidad: 10,
      categoria: 'Cancer'
    },
    {
      id: 2,
      nombreMedicina: 'Medicina B',
      cantidad: 20,
      categoria: 'Diabetes'
    },
    {
      id: 3,
      nombreMedicina: 'Medicina C',
      cantidad: 30,
      categoria: 'Hipertension'
    }
  ];

  editMedicamento(medicamento: any) {
    alert(medicamento.id);
  }

  deleteMedicamento(medicamento: any) {
    alert(medicamento.id);
  }
}
