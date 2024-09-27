//

import { Component } from '@angular/core';
import { NgZone } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { H1Component } from '../../../Shared/h1/h1.component';
import { appSettings } from '../../../settings/appsettings';
import { getCookieHeader } from '../../../custom/getCookieHeader';

@Component({
  selector: 'app-form-medicamentos',
  standalone: true,
  imports: [FormsModule, H1Component],
  templateUrl: './form-medicamentos.component.html',
  styleUrls: ['./form-medicamentos.component.css'],
})
export default class FormMedicamentosComponent {
  medicamento = {
    name: '',
    quantity: 0,
  };

  constructor(private ngZone: NgZone) {}

  createMedicamento() {
    const { headerPost } = getCookieHeader();
    fetch(`${appSettings.apiUrl}medication/create`, {
      method: 'POST',
      headers: headerPost,
      body: JSON.stringify(this.medicamento),
    })
      .then((response) => response.json())
      .then((json) => {
        console.log(json); // Log the response from the API
        if (json.message === 'Contact the administrator: error') {
          console.log('Error al crear el medicamento');
        } else {
          console.log('Medicamento creado con éxito');
          this.medicamento = {
            name: '',
            quantity: 0,
          };
        }
      })
      .catch((error) => {
        console.error(error); // Log the error
        console.log('Error al crear el medicamento');
      });
  }
}
