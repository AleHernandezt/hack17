import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { H1Component } from '../../../Shared/h1/h1.component';
import { CardComponent } from "../../../Shared/card/card.component";
import { InputTextComponent } from "../../../Shared/input-text/input-text.component";
import { BtnComponent } from "../../../Shared/btn/btn.component";
import { InputNumberComponent } from "../../../Shared/input-number/input-number.component";
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-form-comunidad',
  standalone: true,
  imports: [
    H1Component,
    CardComponent,
    InputTextComponent,
    BtnComponent,
    InputNumberComponent,
    ReactiveFormsModule 
  ],  templateUrl: './form-comunidad.component.html',
  styleUrls: ['./form-comunidad.component.css']
})
export default class FormComunidadComponent {
  form: FormGroup;

  constructor() {
    this.form = new FormGroup({
      nombre: new FormControl('', Validators.required),
      numero: new FormControl('', Validators.required)
    });
  }

  onSubmit() {
    if (this.form.valid) {
      console.log('Form submitted:', this.form.value);
      // Call your API or perform any other action here
    } else {
      console.log('Form invalid:', this.form);
    }
  }
}