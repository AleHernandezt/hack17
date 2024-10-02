import { Component, OnInit, NgZone } from '@angular/core';
import { H1Component } from '../../../Shared/h1/h1.component';
import { Table2Component } from '../../../Shared/table2/table2.component';
import { SearchbarComponent } from '../../../Shared/searchbar/searchbar.component';
import { BtnComponent } from '../../../Shared/btn/btn.component';
import { getCookieHeader } from '../../../custom/getCookieHeader';
import { appSettings } from '../../../settings/appsettings';
import { Router } from '@angular/router';

@Component({
  selector: 'app-gestion-entrega',
  standalone: true,
  imports: [H1Component, Table2Component, SearchbarComponent, BtnComponent],
  templateUrl: './gestion-entrega.component.html',
  styleUrls: ['./gestion-entrega.component.css'],
})
export default class GestionEntregaComponent implements OnInit {
  entregas: any[] = [];
  columnas: string[] = [
    'appointment_date',
    'treatment_id',
    'patient_id',
    'expiration_date',
    'status',
  ];
  encabezados: string[] = [
    'Fecha de Entrega',
    'ID de Tratamiento',
    'ID de Paciente',
    'Fecha de Expiración',
    'Estado',
  ];

  verEntrega(item: any) {
    this.router.navigate(['dashboard']);
  }

  entregado(item: any) {
    const { headers } = getCookieHeader();
    fetch(`${appSettings.apiUrl}delivery/changeDelivered/${item.id}`, {
      method: 'PUT',
      headers: headers,
      body: JSON.stringify({ status: 'delivered' }),
    })
      .then((response) => {
        console.log(response);
        if (response.ok) {
          return response.json();
        } else {
          throw new Error(`Error ${response.status}: ${response.statusText}`);
        }
      })
      .then((json) => {
        console.log(json);
        // Elimina el elemento de la tabla
        this.entregas = this.entregas.filter(
          (entrega) => entrega.id !== item.id
        );
      })
      .catch((error) => {
        console.error(error);
      });
  }

  constructor(private ngZone: NgZone, private router: Router) {}

  ngOnInit(): void {
    this.getEntregas();
  }

  getEntregas() {
    const { headers } = getCookieHeader();
    fetch(`${appSettings.apiUrl}delivery/getPending`, {
      method: 'GET',
      headers: headers,
    })
      .then((response) => response.json())
      .then((json) => {
        this.ngZone.run(() => {
          this.entregas = json.data.Delivery.map((entrega: any) => ({
            id: entrega.id,
            appointment_date: entrega.appointment_date,
            withdrawal_date: entrega.withdrawal_date,
            treatment_id: entrega.treatment_id,
            patient_id: entrega.patient_id,
            expiration_date: entrega.expiration_date,
            status: entrega.status,
          }));
        });
      });
  }
}
