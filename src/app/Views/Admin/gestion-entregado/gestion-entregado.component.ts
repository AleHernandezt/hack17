import { Component, OnInit, NgZone } from '@angular/core';
import { H1Component } from "../../../Shared/h1/h1.component";
import { Table2Component } from '../../../Shared/table2/table2.component';
import { SearchbarComponent } from '../../../Shared/searchbar/searchbar.component';
import { BtnComponent } from '../../../Shared/btn/btn.component';
import { getCookieHeader } from '../../../custom/getCookieHeader';
import { appSettings } from '../../../settings/appsettings';

@Component({
  selector: 'app-gestion-entregado',
  standalone: true,
  imports: [H1Component, Table2Component, SearchbarComponent, BtnComponent],
  templateUrl: './gestion-entregado.component.html',
  styleUrls: ['./gestion-entregado.component.css']
})
export default class GestionEntregadoComponent implements OnInit {
  entregados: any[] = [];
  columnas: string[] = ['appointment_date', 'treatment_id', 'patient_id', 'expiration_date'];
  encabezados: string[] = ['Fecha de Entrega', 'ID del Tratamiento', 'ID del Paciente', 'Fecha de Expiración'];

  constructor(private ngZone: NgZone) { }

  ngOnInit(): void {
    this.getEntregados();
  }

  getEntregados() {
    console.log("holi?");
    
    const { headers } = getCookieHeader();
    fetch(`${appSettings.apiUrl}delivery/getDelivered`, {
      method: 'GET',
      headers: headers,
    })
      .then((response) => response.json())
      .then((json) => {
        console.log(json); // Verificar la respuesta del servidor
        this.ngZone.run(() => {
          console.log(json.data.Delivery); // Verificar la estructura de la respuesta
          this.entregados = json.data.Delivery.map((entregado: any) => ({
            appointment_date: entregado.appointment_date,
            treatment_id: entregado.treatment_id,
            patient_id: entregado.patient_id,
            expiration_date: entregado.expiration_date,
          }));
          console.log(this.entregados); // Verificar la asignación de variables
        });
      });
  }
}