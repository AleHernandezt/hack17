import { Component } from '@angular/core';
import { ListaDonanteComponent } from "../../../Components/Donante/lista-donante/lista-donante.component";
import { ListaTratamientoComponent } from "../../../Components/Tratamientos/lista-tratamiento/lista-tratamiento.component";
import { ResumenDonacionComponent } from "../../../Components/Donacion/resumen-donacion/resumen-donacion.component";

@Component({
  selector: 'app-form-entrega',
  standalone: true,
  imports: [ListaDonanteComponent, ListaTratamientoComponent, ResumenDonacionComponent],
  templateUrl: './form-entrega.component.html',
  styleUrl: './form-entrega.component.css'
})
export class FormEntregaComponent {
  donation:  | null = null;

  constructor() {

  }

  ngOnInit() {

  }

  onDonanteSeleccionado(charity : any) {

  }

  onMedicinaSeleccionada(medicina: {id : string, name : string}) {

  }
}
