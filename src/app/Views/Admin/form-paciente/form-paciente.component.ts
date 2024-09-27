import { Component, NgZone } from '@angular/core';
import { H1Component } from '../../../Shared/h1/h1.component';
import { CardComponent } from '../../../Shared/card/card.component';
import { InputTextComponent } from '../../../Shared/input-text/input-text.component';
import { BtnComponent } from '../../../Shared/btn/btn.component';
import { FormsModule } from '@angular/forms';
import { appSettings } from '../../../settings/appsettings';
import { getCookieHeader } from '../../../custom/getCookieHeader';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-form-paciente',
  standalone: true,
  imports: [
    H1Component,
    CardComponent,
    InputTextComponent,
    BtnComponent,
    FormsModule,
    CommonModule
  ],
  templateUrl: './form-paciente.component.html',
  styleUrls: ['./form-paciente.component.css'],
})
export default class FormPacienteComponent {
  form: any = {
    first_name: '',
    last_name: '',
    birth_date: '',
    email: '',
    id_card_prefix: '',
    id_card: '',
    phone: '',
    address: '',
    gender: '',
    economic_status: '',
    pathology_description: '',
    vulnerability_level: '',
  };

  pathologies: any[] = [];

  constructor(private ngZone: NgZone) {}

  ngOnInit(): void {
    this.getPathologies();
  }

  getPathologies(): void {
    const { headers } = getCookieHeader();
    fetch(`${appSettings.apiUrl}pathology/getAll`, {
      method: 'GET',
      headers: headers,
    })
      .then((response) => response.json())
      .then((json) => {
        console.log(json); // Imprime los datos en la consola
        this.pathologies = json.data.pathologies.slice(0, 5).map((pathology: { id: any; name: any; }) => ({
          id: pathology.id,
          name: pathology.name,
          selected: false,
        }));
      });
  }

  updatePathologies(): void {
    const selectedPathologies = this.pathologies.filter((pathology) => pathology.selected);
    console.log(selectedPathologies);
  }

  createPaciente(): void {
    if (
      !this.form.first_name ||
      !this.form.last_name ||
      !this.form.birth_date ||
      !this.form.email ||
      !this.form.id_card ||
      !this.form.phone ||
      !this.form.address ||
      !this.form.gender ||
      !this.form.economic_status ||
      !this.form.pathology_description
    ) {
      alert('Por favor, complete todos los campos');
      return;
    }

    const paciente = {
      first_name: this.form.first_name,
      last_name: this.form.last_name,
      birth_date: this.form.birth_date,
      email: this.form.email,
      cedula: this.form.id_card_prefix + this.form.id_card,
      phone: this.form.phone,
      address: this.form.address,
      gender: this.form.gender,
      economic_status: this.form.economic_status,
      community_id: 1,
      pathologies: this.pathologies.filter((pathology) => pathology.selected).map((pathology) => ({
        id_pathology: pathology.id,
        description: this.form.pathology_description,
      })),
      vulnerability_level: this.form.vulnerability_level,
    };

    const { headerPost } = getCookieHeader();
    fetch(`${appSettings.apiUrl}patient/create`, {
      method: 'POST',
      headers: headerPost,
      body: JSON.stringify(paciente),
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
            id_card_prefix: 'V-',
            id_card: '',
            phone: '',
            address: '',
            gender: '',
            economic_status: '',
            pathology_description: '',
            vulnerability_level: '',
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