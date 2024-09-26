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
    nombre: '',
    region: ''
  };

  constructor(private ngZone: NgZone) { }

  createComunidad(): void {
    if (this.form.nombre !== '' && this.form.region !== '') {
      const comunidad = {
        name: this.form.nombre,
        region: this.form.region
      };

      fetch('http://localhost:3000/api/community/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(comunidad)
      })
      .then((response) => response.json())
      .then((json) => {
        console.log(json); // Log the response from the API
        this.ngZone.run(() => {
          alert('Comunidad creada con éxito');
          this.form = {
            nombre: '',
            region: ''
          };
        });
      })
      .catch((error) => {
        console.error(error); // Log the error
        this.ngZone.run(() => {
          alert('Error al crear la comunidad');
        });
      });
    }
  }
}