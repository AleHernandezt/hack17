import { Component, OnInit, NgZone } from '@angular/core';
import { H1Component } from "../../../Shared/h1/h1.component";
import { Table2Component } from '../../../Shared/table2/table2.component';
import { SearchbarComponent } from '../../../Shared/searchbar/searchbar.component';
import { BtnComponent } from '../../../Shared/btn/btn.component';
import { getCookieHeader } from '../../../custom/getCookieHeader';
import { appSettings } from '../../../settings/appsettings';

@Component({
  selector: 'app-gestion-entrega',
  standalone: true,
  imports: [H1Component, Table2Component, SearchbarComponent, BtnComponent],
  templateUrl: './gestion-entrega.component.html',
  styleUrls: ['./gestion-entrega.component.css']
})
export default class GestionEntregaComponent implements OnInit {
  entregas: any[] = [];
  columnas: string[] = ['id', 'appointment_date', 'withdrawal_date', 'treatment_id', 'patient_id', 'expiration_date', 'status'];
  encabezados: string[] = ['ID', 'Fecha de Entrega', 'Fecha de Retiro', 'ID de Tratamiento', 'ID de Paciente', 'Fecha de Expiración', 'Estado'];

  constructor(private ngZone: NgZone) { }

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