import { Component, EventEmitter, Output } from '@angular/core';
import { SearchBarInputComponent } from "../../../Shared/search-bar-input/search-bar-input.component";
import { CardMedicamentoComponent } from "../card-medicamento/card-medicamento.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-lista-medicinas',
  standalone: true,
  imports: [SearchBarInputComponent, CardMedicamentoComponent, CommonModule],
  templateUrl: './lista-medicinas.component.html',
  styleUrl: './lista-medicinas.component.css'
})
export class ListaMedicinasComponent {


  medications = [
    { id: 'med1', name: 'Aspirin'},
    { id: 'med2', name: 'Ibuprofen'},
    { id: 'med3', name: 'acetamino'},
    { id: 'med4', name: 'atamel'},
    { id: 'med5', name: 'cerelac'},
    { id: 'med6', name: 'alegra'},
    { id: 'med7', name: 'cetirizina',},
    { id: 'med8', name: 'bisoprolol'}
  ]

  filteredMedicines : any = []


  @Output() medicinaSeleccionada = new EventEmitter<{ name: string; id: string }>();

  seleccionarMedicina(Medicina: { name: string; id: string }) {
    this.medicinaSeleccionada.emit(Medicina);
  }

  realizarBusqueda(busqueda: string) {
    this.filteredMedicines = this.medications.filter(medicine =>
      medicine.name.toLowerCase().includes(busqueda.toLowerCase())
    );
  }

  limpiarBusqueda() {
    this.filteredMedicines = [];
  }





}
