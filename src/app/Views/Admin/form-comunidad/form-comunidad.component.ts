import { Component, inject } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { H1Component } from '../../../Shared/h1/h1.component';
import { CardComponent } from "../../../Shared/card/card.component";
import { InputTextComponent } from "../../../Shared/input-text/input-text.component";
import { BtnComponent } from "../../../Shared/btn/btn.component";
import { InputNumberComponent } from "../../../Shared/input-number/input-number.component";
import { ReactiveFormsModule } from '@angular/forms';
import { Router } from "@angular/router";
import { ComunidadService } from '../../../Core/Services/comunidad.service';
import { Comunidad } from '../../../Core/Interfaces/comunidad.interface';
import { HttpClientModule } from '@angular/common/http'; // Importamos HttpClientModule

@Component({
  selector: 'app-form-comunidad',
  standalone: true,
  imports: [
    H1Component,
    CardComponent,
    InputTextComponent,
    BtnComponent,
    InputNumberComponent,
    ReactiveFormsModule,
    HttpClientModule
  ],
  template: `
    <app-h1 title="Crear Comunidad"></app-h1>
    <app-card title="Crear Comunidad">
      <div class="container">
        <form [formGroup]="userForm">
          <app-input-text label="Nombre" formControlName="name"></app-input-text>
          <app-input-text label="Descripción" formControlName="description" type="textarea"></app-input-text>
          <app-btn (click)="onSaveComunidad()">Crear</app-btn>
        </form>
      </div>
    </app-card>
  `,
  styleUrls: ['./form-comunidad.component.css']
})
export default class FormComunidadComponent {
  private ComunidadService = inject(ComunidadService);
  private Navigation = inject(Router);

  userForm: FormGroup = new FormGroup({
    name: new FormControl(''),
    description: new FormControl(''),
  });

  onSaveComunidad() {
    console.log(this.userForm.value);

    this.ComunidadService.createComunidad(this.userForm.value).subscribe({
      next: (resp: any) => {
        console.log(resp)
        this.Navigation.navigateByUrl('/gestionComunidades');
      }
    })
  }
}