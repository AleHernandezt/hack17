import { Component, OnInit } from '@angular/core';
import { BtnComponent } from '../../../Shared/btn/btn.component';
import { TableComponent } from '../../../Shared/table/table.component';
import { H1Component } from '../../../Shared/h1/h1.component';
import { SearchbarComponent } from '../../../Shared/searchbar/searchbar.component';
import { Table2Component } from '../../../Shared/table2/table2.component';
import { NgZone } from '@angular/core';
import { appSettings } from '../../../settings/appsettings';
import { getCookieHeader } from '../../../custom/getCookieHeader';

@Component({
  selector: 'app-medicamentos',
  standalone: true,
  imports: [
    H1Component,
    BtnComponent,
    TableComponent,
    SearchbarComponent,
    Table2Component,
  ],
  templateUrl: './medicamentos.component.html',
  styleUrl: './medicamentos.component.css',
})
export default class MedicamentosComponent implements OnInit {
  medicamentos: any[] = [];

  constructor(private ngZone: NgZone) {}

  ngOnInit(): void {
    this.getMedicamentos();
  }

  getMedicamentos() {
    const { headers } = getCookieHeader();
    fetch(`${appSettings.apiUrl}medication/getAll`, {
      method: 'GET',
      headers: headers,
    })
      .then((response) => response.json())
      .then((json) => {
        console.log(json); // <--- Agrega esta línea para imprimir los datos en la consola
        if (
          json &&
          json.data &&
          json.data.Medication &&
          Array.isArray(json.data.Medication)
        ) {
          this.ngZone.run(() => {
            this.medicamentos = json.data.Medication.slice(0, 10);
          });
        } else {
          console.error('La API no devolvió un arreglo de medicamentos');
        }
      });
  }

  editMedicamento(medicamento: any) {
    alert(medicamento.name);
  }

  deleteMedicamento(medicamento: any) {
    alert(medicamento.name);
  }
}
