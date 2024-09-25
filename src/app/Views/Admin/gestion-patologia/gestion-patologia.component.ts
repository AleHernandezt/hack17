import { Component } from '@angular/core';
import { H1Component } from "../../../Shared/h1/h1.component";
import { BtnComponent } from "../../../Shared/btn/btn.component";
import { SearchbarComponent } from "../../../Shared/searchbar/searchbar.component";
import { Table2Component } from "../../../Shared/table2/table2.component";

@Component({
  selector: 'app-gestion-patologia',
  standalone: true,
  imports: [H1Component, BtnComponent, SearchbarComponent, Table2Component],
  templateUrl: './gestion-patologia.component.html',
  styleUrl: './gestion-patologia.component.css'
})
export default class GestionPatologiaComponent {
  patologias = [
    {
      id: 1,
      nombre: 'Patología 1',
      categoria: 'Categoria A',
      descripcion: 'Descripción de la patología 1. Este es un texto un poco más largo para describir la patología.'
    },
    {
      id: 2,
      nombre: 'Patología 2',
      categoria: 'Categoria B',
      descripcion: 'Descripción de la patología 2. Este es un texto un poco más largo para describir la patología.'
    },
    {
      id: 3,
      nombre: 'Patología 3',
      categoria: 'Categoria C',
      descripcion: 'Descripción de la patología 3. Este es un texto un poco más largo para describir la patología.'
    }
  ];

  editPatologia(patologia: any) {
    alert(patologia.id);
  }

  deletePatologia(patologia: any) {
    alert(patologia.id);
  }
}
