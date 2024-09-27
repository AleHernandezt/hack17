import { Component, NgZone } from '@angular/core';
import { H1Component } from '../../../Shared/h1/h1.component';
import { CardComponent } from "../../../Shared/card/card.component";
import { InputTextComponent } from "../../../Shared/input-text/input-text.component";
import { BtnComponent } from "../../../Shared/btn/btn.component";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-form-paciente',
  standalone: true,
  imports: [H1Component, CardComponent, InputTextComponent, BtnComponent, FormsModule],
  templateUrl: './form-paciente.component.html',
  styleUrls: ['./form-paciente.component.css']
})
export default class FormPacienteComponent {
  form: any = {
    first_name: '',
    last_name: '',
    birth_date: '',
    email: '',
    id_card: '',
    phone: '',
    address: '',
    gender: '',
    vulnerability_level: '',
    economic_status: '',
    pathology_description: ''
  };

  constructor(private ngZone: NgZone) { }

  createPaciente(): void {
    const paciente = {
      first_name: this.form.first_name,
      last_name: this.form.last_name,
      birth_date: this.form.birth_date,
      email: this.form.email,
      id_card: this.form.id_card,
      phone: this.form.phone,
      address: this.form.address,
      gender: this.form.gender,
      vulnerability_level: this.form.vulnerability_level,
      economic_status: this.form.economic_status,
      community_id: 1,
      pathologies: [
        {
          id_pathology: 1,
          description: this.form.pathology_description
        }
      ]
    };

    fetch('http://localhost:3000/api/patient/create', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(paciente)
    })
    .then((response) => response.json())
    .then((json) => {
      console.log(json); // Log the response from the API
      this.ngZone.run(() => {
        alert('Paciente creado con éxito');
        this.form = {
          first_name: '',
          last_name: '',
          birth_date: '',
          email: '',
          id_card: '',
          phone: '',
          address: '',
          gender: '',
          vulnerability_level: '',
          economic_status: '',
          pathology_description: ''
        };
      });
    })
    .catch((error) => {
      console.error(error); // Log the error
      this.ngZone.run(() => {
        alert('Error al crear el paciente');
      });
    });
  }
}