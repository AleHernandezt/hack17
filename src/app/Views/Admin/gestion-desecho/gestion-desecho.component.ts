import { Component, OnInit } from '@angular/core';
import { BtnComponent } from '../../../Shared/btn/btn.component';
import { TableComponent } from '../../../Shared/table/table.component';
import { Table2Component } from '../../../Shared/table2/table2.component';
import { H1Component } from '../../../Shared/h1/h1.component';
import { SearchbarComponent } from '../../../Shared/searchbar/searchbar.component';
import { NgForOf } from '@angular/common';
import { NgZone } from '@angular/core';
import { getCookieHeader } from '../../../custom/getCookieHeader';
import { appSettings } from '../../../settings/appsettings';

@Component({
  selector: 'app-gestion-desecho',
  standalone: true,
  imports: [
    H1Component,
    BtnComponent,
    TableComponent,
    Table2Component,
    SearchbarComponent,
    NgForOf,
  ],
  templateUrl: './gestion-desecho.component.html',
  styleUrls: ['./gestion-desecho.component.css'],
})
export default class GestionDesechoComponent implements OnInit {
  constructor(private ngZone: NgZone) {}

  deleteDesecho($event: any) {
    throw new Error('Method not implemented.');
  }
  editDesecho($event: any) {
    throw new Error('Method not implemented.');
  }
  desechos: any[] = [];
  items: any;

  ngOnInit(): void {
    console.log('asdf');
    this.getPost();
  }
  getPost() {
    const { headers } = getCookieHeader();
    fetch(`${appSettings.apiUrl}medication_disposal/getAll`, {
      method: 'GET',
      headers: headers,
    })
      .then((response) => response.json())
      .then((json) => {
        const desechos = json.data.MedicationDisposal;
        const medicamentos: { nombre: any; cantidadDesechada: any; razon: any; }[] = [];
        desechos.forEach((desecho: { medication_id: any; medication: any; quantity: any; reason: any; }) => {
          const medicamentoId = desecho.medication_id;
          console.log('Medicamento ID:', medicamentoId);
          const medicamento = desecho.medication;
          if (medicamento) {
            this.ngZone.run(() => {
              medicamentos.push({
                nombre: medicamento.name,
                cantidadDesechada: desecho.quantity,
                razon: desecho.reason,
              });
            });
          }
        });
        this.ngZone.run(() => {
          this.desechos = medicamentos.slice(-10);
        });
      });
  }
}