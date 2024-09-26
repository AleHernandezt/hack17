import { Component } from '@angular/core';
import { NgZone } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { H1Component } from "../../../Shared/h1/h1.component";

@Component({
  selector: 'app-form-comunidad',
  standalone: true,
  imports: [FormsModule, H1Component],
  templateUrl: './form-comunidad.component.html',
  styleUrls: ['./form-comunidad.component.css']
})
export default class FormComunidadComponent {
  form: any = {
    name: '',
    region: ''
  };

  constructor(private ngZone: NgZone) { }

  createComunidad() {
    fetch('http://localhost:3000/api/community/create', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(this.form)
    })
      .then((response) => response.json())
      .then((json) => {
        console.log(json); // Log the response from the API
        this.ngZone.run(() => {
          if (json.message === 'Contact the administrator: error') {
            console.log('Error al crear la comunidad');
          } else {
            console.log('Comunidad creada con éxito');
            this.form = {
              name: '',
              region: ''
            };
          }
        });
      })
      .catch((error) => {
        console.error(error); // Log the error
        this.ngZone.run(() => {
          console.log('Error al crear la comunidad');
        });
      });
  }
}