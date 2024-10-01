import { Component, OnInit, NgZone } from '@angular/core';
import { H1Component } from '../../../Shared/h1/h1.component';
import { Table2Component } from '../../../Shared/table2/table2.component';
import { SearchbarComponent } from '../../../Shared/searchbar/searchbar.component';
import { BtnComponent } from '../../../Shared/btn/btn.component';
import { appSettings } from '../../../settings/appsettings';
import { getCookieHeader } from '../../../custom/getCookieHeader';

@Component({
  selector: 'app-gestion-donativo',
  standalone: true,
  imports: [H1Component, Table2Component, SearchbarComponent, BtnComponent],
  templateUrl: './gestion-donativo.component.html',
  styleUrls: ['./gestion-donativo.component.css'],
})
export default class GestionDonativoComponent implements OnInit {
deleteDonativo($event: any) {
throw new Error('Method not implemented.');
}
editDonativo($event: any) {
throw new Error('Method not implemented.');
}
  donativos: any[] = [];
  columnas: string[] = ['id', 'donante_id', 'medicamento_id', 'cantidad'];
  encabezados: string[] = ['ID', 'ID Donante', 'ID Medicamento', 'Cantidad'];

  constructor(private ngZone: NgZone) {}

  ngOnInit(): void {
    this.getDonativos();
  }

  getDonativos() {
    const { headers } = getCookieHeader();
    fetch(`${appSettings.apiUrl}donation/getAll`, {
      method: 'GET',
      headers: headers,
    })
      .then((response) => response.json())
      .then((json) => {
        console.log(json); // <--- Agrega esta línea para imprimir los datos en la consola
        this.ngZone.run(() => {
          this.donativos = json.data.Donation;
        });
      });
  }
}