import { Component } from '@angular/core';
import { ResumenTratamientoComponent } from "../../../Components/Tratamientos/resumen-tratamiento/resumen-tratamiento.component";

@Component({
  selector: 'app-form-tratamiento',
  standalone: true,
  imports: [ResumenTratamientoComponent],
  templateUrl: './form-tratamiento.component.html',
  styleUrl: './form-tratamiento.component.css'
})
export default class FormTratamientoComponent {

}
