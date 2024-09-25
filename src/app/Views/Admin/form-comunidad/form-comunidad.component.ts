import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { Comunidad } from '../../../Core/Interfaces/comunidad.interface';
import { ComunidadService } from '../../../Core/Services/comunidad.service';
import { CardComponent } from "../../../Shared/card/card.component";
import { H1Component } from "../../../Shared/h1/h1.component";
import { InputTextComponent } from "../../../Shared/input-text/input-text.component";
import { BtnComponent } from "../../../Shared/btn/btn.component";

@Component({
  selector: 'app-form-comunidad',
  standalone: true,
  imports: [ReactiveFormsModule, CardComponent, H1Component, BtnComponent, InputTextComponent],
  templateUrl: './form-comunidad.component.html',
  styleUrls: ['./form-comunidad.component.css']
})
export default class FormComunidadComponent {
  form: FormGroup<any> = this.formBuilder.group({}); // Initialize the form group

  constructor(private formBuilder: FormBuilder, private comunidadService: ComunidadService) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      nombre: ['', Validators.required],
      region: ['', Validators.required]
    });
  }

  createComunidad(): void {
    if (this.form.valid) {
      const comunidad: Comunidad = {
        name: this.form.get('name')?.value,
        description: this.form.get('description')?.value,
        id: 0
      };
      this.comunidadService.createComunidad(comunidad).subscribe((response: any) => {
        console.log(response); // Log the response from the API
        // Handle success response
      }, (error: any) => {
        console.error(error); // Log the error
        // Handle error response
      });
    }
  }
}