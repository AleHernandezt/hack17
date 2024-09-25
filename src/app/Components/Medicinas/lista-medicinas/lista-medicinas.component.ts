import { Component, EventEmitter, Output } from '@angular/core';
import { SearchBarInputComponent } from "../../../Shared/search-bar-input/search-bar-input.component";
import { CardMedicamentoComponent } from "../card-medicamento/card-medicamento.component";
import { CommonModule } from '@angular/common';
import { MedicationInterface } from '../../../Core/Interfaces/medication.interface';

@Component({
  selector: 'app-lista-medicinas',
  standalone: true,
  imports: [SearchBarInputComponent, CardMedicamentoComponent, CommonModule],
  templateUrl: './lista-medicinas.component.html',
  styleUrl: './lista-medicinas.component.css'
})
export class ListaMedicinasComponent {


  medications = [
    { id: '1', name: 'Aspirin'},
    { id: '2', name: 'Ibuprofen'},
    { id: '3', name: 'acetamino'},
    { id: '4', name: 'atamel'},
    { id: '5', name: 'cerelac'},
    { id: '6', name: 'alegra'},
    { id: '7', name: 'cetirizina',},
    { id: '8', name: 'bisoprolol'}
  ]

  filteredMedicines : any = []


  @Output() medicinaSeleccionada = new EventEmitter<MedicationInterface>();

  seleccionarMedicina(Medicina: MedicationInterface) {
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
