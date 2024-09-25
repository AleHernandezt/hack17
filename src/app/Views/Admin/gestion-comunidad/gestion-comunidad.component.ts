import { Component } from '@angular/core';
import { BtnComponent } from "../../../Shared/btn/btn.component";
import { TableComponent } from "../../../Shared/table/table.component";
import { Table2Component } from "../../../Shared/table2/table2.component";
import { H1Component } from '../../../Shared/h1/h1.component';
import { SearchbarComponent } from "../../../Shared/searchbar/searchbar.component";

@Component({
  selector: 'app-gestion-comunidad',
  standalone: true,
  imports: [H1Component, BtnComponent, TableComponent, Table2Component, SearchbarComponent],
  templateUrl: './gestion-comunidad.component.html',
  styleUrl: './gestion-comunidad.component.css'
})
export default class GestionComunidadComponent {
  comunidades = [
    {
      id: 1,
      nombre: 'Comunidad 1',
      region: 'Calle 1, número 2, 28001 Madrid'
    },
    {
      id: 2,
      nombre: 'Comunidad 2',
      region: 'Avenida 3, número 4, 28002 Madrid'
    },
    {
      id: 3,
      nombre: 'Comunidad 3',
      region: 'Calle 5, número 6, 28003 Madrid'
    }
  ];

  editComunidad(comunidad: any) {
    alert(comunidad.nombre);
  }

  deleteComunidad(comunidad: any) {
    alert(comunidad.id);
  }
}
