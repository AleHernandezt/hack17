import { Component } from '@angular/core';
import { H1Component } from '../../../Shared/h1/h1.component';
import { CardComponent } from "../../../Shared/card/card.component";
import { InputTextComponent } from "../../../Shared/input-text/input-text.component";
import { BtnComponent } from "../../../Shared/btn/btn.component";

@Component({
  selector: 'app-form-paciente',
  standalone: true,
  imports: [H1Component, CardComponent, InputTextComponent, BtnComponent],
  templateUrl: './form-paciente.component.html',
  styleUrl: './form-paciente.component.css'
})
export default class FormPacienteComponent {

}
