import { Component, OnInit, NgZone } from '@angular/core';
import { H1Component } from "../../../Shared/h1/h1.component";
import { Table2Component } from '../../../Shared/table2/table2.component';
import { SearchbarComponent } from '../../../Shared/searchbar/searchbar.component';
import { BtnComponent } from '../../../Shared/btn/btn.component';
import { HttpClient } from '@angular/common/http';

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

  constructor(private http: HttpClient, private ngZone: NgZone) { }

  ngOnInit(): void {
    this.getEntregas();
  }

  getEntregas() {
    this.http.get('localhost:3000/api/delivery/getPending')
      .subscribe((response: any) => {
        this.ngZone.run(() => {
          this.entregas = response.data.Delivery.map((entrega: any) => ({
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