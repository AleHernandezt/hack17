import { Component } from '@angular/core';
import { ResumenMedicinaComponent } from "../../Medicinas/resumen-medicina/resumen-medicina.component";

@Component({
  selector: 'app-resumen-tratamiento',
  standalone: true,
  imports: [ResumenMedicinaComponent],
  templateUrl: './resumen-tratamiento.component.html',
  styleUrl: './resumen-tratamiento.component.css'
})
export class ResumenTratamientoComponent {

}
