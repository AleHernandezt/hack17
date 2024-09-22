import { Component } from '@angular/core';
import { BtnComponent } from "../../../Shared/btn/btn.component";
import { TableComponent } from "../../../Shared/table/table.component";
import { Table2Component } from "../../../Shared/table2/table2.component";

@Component({
  selector: 'app-gestion-categoria',
  standalone: true,
  imports: [BtnComponent, TableComponent, Table2Component],
  templateUrl: './gestion-categoria.component.html',
  styleUrls: ['./gestion-categoria.component.css']
})
export default class GestionCategoriaComponent {

  editCategory(category: any) {
    alert(category.id);
  }

  deleteCategory(category: any) {
    alert(category.id);

  }
}
