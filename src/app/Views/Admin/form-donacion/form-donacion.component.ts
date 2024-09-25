import { Component } from '@angular/core';
import { ListaMedicinasComponent } from "../../../Components/Medicinas/lista-medicinas/lista-medicinas.component";
import { ListaDonanteComponent } from "../../../Components/Donante/lista-donante/lista-donante.component";
import { ResumenDonacionComponent } from "../../../Components/Donacion/resumen-donacion/resumen-donacion.component";

@Component({
  selector: 'app-form-donacion',
  standalone: true,
  imports: [ListaMedicinasComponent, ListaDonanteComponent, ResumenDonacionComponent],
  templateUrl: './form-donacion.component.html',
  styleUrl: './form-donacion.component.css'
})
export class FormDonacionComponent {
  treatment: any = {};

  constructor() {}

  ngOnInit() {

  }

  onDonanteSeleccionado(charity: CharityInterface) {

  }

  onMedicinaSeleccionada(medicina : {name : string; id : string}){

  }
}
