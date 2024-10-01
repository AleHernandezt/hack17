import { Component, OnInit } from '@angular/core';
import { H1Component } from '../../../Shared/h1/h1.component';
import { BtnComponent } from '../../../Shared/btn/btn.component';
import { SearchbarComponent } from '../../../Shared/searchbar/searchbar.component';
import { Table2Component } from '../../../Shared/table2/table2.component';
import { NgZone } from '@angular/core';
import { appSettings } from '../../../settings/appsettings';
import { getCookieHeader } from '../../../custom/getCookieHeader';

@Component({
  selector: 'app-gestion-patologia',
  standalone: true,
  imports: [H1Component, BtnComponent, SearchbarComponent, Table2Component],
  templateUrl: './gestion-patologia.component.html',
  styleUrls: ['./gestion-patologia.component.css'],
})
export default class GestionPatologiaComponent implements OnInit {
  patologias: any[] = [];
  columnas: string[] = ['name'];
  encabezados: string[] = ['Nombre'];

  constructor(private ngZone: NgZone) {}

  ngOnInit(): void {
    this.getPatologias();
  }

  getPatologias() {
    const { headers } = getCookieHeader();
    fetch(`${appSettings.apiUrl}pathology/getAll`, {
      method: 'GET',
      headers: headers,
    })
      .then((response) => response.json())
      .then((json) => {
        console.log(json); // <--- Agrega esta línea para imprimir los datos en la consola
        if (
          json &&
          json.data &&
          json.data.pathologies &&
          Array.isArray(json.data.pathologies)
        ) {
          const patologias = json.data.pathologies;
          const ultimos10 = patologias.slice(-10); // <--- Carga los últimos 10 registros
          this.ngZone.run(() => {
            this.patologias = ultimos10;
          });
        } else {
          console.error('La API no devolvió un arreglo de patologías');
        }
      });
  }

  editPatologia(patologia: any) {
    alert(patologia);
  }

  deletePatologia(patologia: any) {
    alert(patologia);
  }
}