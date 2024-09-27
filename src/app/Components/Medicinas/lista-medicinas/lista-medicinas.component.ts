import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SearchBarInputComponent } from "../../../Shared/search-bar-input/search-bar-input.component";
import { CardMedicamentoComponent } from "../card-medicamento/card-medicamento.component";
import { CommonModule } from '@angular/common';
import { MedicationInterface } from '../../../Core/Interfaces/medication.interface';

@Component({
  selector: 'app-lista-medicinas',
  standalone: true,
  imports: [SearchBarInputComponent, CardMedicamentoComponent, CommonModule],
  templateUrl: './lista-medicinas.component.html',
  styleUrls: ['./lista-medicinas.component.css']
})
export class ListaMedicinasComponent implements OnInit {

  medications: MedicationInterface[] = [];
  filteredMedicines: MedicationInterface[] = [];

  @Output() medicinaSeleccionada = new EventEmitter<MedicationInterface>();

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.loadMedications();
  }

  loadMedications() {
    const apiUrl = 'http://localhost:3000/api/medication/getAll';
    this.http.get<{ message: string; data: { Medication: MedicationInterface[] } }>(apiUrl).subscribe(
      (response) => {

        this.medications = response.data.Medication;
        this.filteredMedicines = this.medications;
      },
      error => {
        console.error('Error al obtener medicamentos:', error);
      }
    );
  }

  seleccionarMedicina(medicina: MedicationInterface) {
    this.medicinaSeleccionada.emit(medicina);
  }

  realizarBusqueda(busqueda: string) {
    this.filteredMedicines = this.medications.filter(medicine =>
      medicine.name!.toLowerCase().includes(busqueda.toLowerCase())
    );
  }

  limpiarBusqueda() {
    this.filteredMedicines = this.medications; // Restaurar a todos los medicamentos
  }
}
