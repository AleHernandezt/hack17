import { Component } from '@angular/core';
import { H1Component } from '../../../Shared/h1/h1.component';
import { CardComponent } from "../../../Shared/card/card.component";
import { InputTextComponent } from "../../../Shared/input-text/input-text.component";
import { BtnComponent } from "../../../Shared/btn/btn.component";

@Component({
  selector: 'app-form-categoria',
  standalone: true,
  imports: [H1Component, CardComponent, InputTextComponent, BtnComponent],
  templateUrl: './form-categoria.component.html',
  styleUrl: './form-categoria.component.css'
})
export default class FormCategoriaComponent {
form: any;

}
