import { Component } from '@angular/core';
import { BtnComponent } from "../../../Shared/btn/btn.component";
import { TableComponent } from "../../../Shared/table/table.component";

@Component({
  selector: 'app-gestion-categoria',
  standalone: true,
  imports: [BtnComponent, TableComponent],
  templateUrl: './gestion-categoria.component.html',
  styleUrl: './gestion-categoria.component.css'
})
export default class GestionCategoriaComponent {

}
