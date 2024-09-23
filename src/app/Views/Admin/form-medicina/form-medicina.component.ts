import { Component } from '@angular/core';
import { ResumenTratamientoComponent } from "../../../Components/Tratamientos/resumen-tratamiento/resumen-tratamiento.component";

@Component({
  selector: 'app-form-medicina',
  standalone: true,
  imports: [ResumenTratamientoComponent],
  templateUrl: './form-medicina.component.html',
  styleUrl: './form-medicina.component.css'
})
export default class FormMedicinaComponent {

}
