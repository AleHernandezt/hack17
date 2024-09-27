// 

import { Component } from '@angular/core';
import { NgZone } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { H1Component } from "../../../Shared/h1/h1.component";

@Component({
  selector: 'app-form-medicamentos',
  standalone: true,
  imports: [FormsModule, H1Component],
  templateUrl: './form-medicamentos.component.html',
  styleUrls: ['./form-medicamentos.component.css']
})
export default class FormMedicamentosComponent {
  medicamento = {
    name: '',
    quantity: 0
  };

  constructor(private ngZone: NgZone) { }

  createMedicamento() {
    fetch('http://localhost:3000/api/medication/create', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(this.medicamento)
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
            quantity: 0
          };
        }
      })
      .catch((error) => {
        console.error(error); // Log the error
        console.log('Error al crear el medicamento');
      });
  }
}