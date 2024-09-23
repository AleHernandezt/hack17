import { Component, EventEmitter, Output } from '@angular/core';
import { SearchBarInputComponent } from "../../../Shared/search-bar-input/search-bar-input.component";
import { CardMedicamentoComponent } from "../card-medicamento/card-medicamento.component";

@Component({
  selector: 'app-lista-medicinas',
  standalone: true,
  imports: [SearchBarInputComponent, CardMedicamentoComponent],
  templateUrl: './lista-medicinas.component.html',
  styleUrl: './lista-medicinas.component.css'
})
export class ListaMedicinasComponent {


  pacientes = [
    { nombre: 'Juan Pérez', cedula: '001-1234567-1' },
    { nombre: 'María López', cedula: '001-2345678-2' },
    { nombre: 'Carlos Sánchez', cedula: '001-3456789-3' },
    { nombre: 'Ana Gómez', cedula: '001-4567890-4' },
    { nombre: 'Luis Martínez', cedula: '001-5678901-5' },
    { nombre: 'Laura Rodríguez', cedula: '001-6789012-6' },
    { nombre: 'Jorge Fernández', cedula: '001-7890123-7' },
    { nombre: 'Sofía Torres', cedula: '001-8901234-8' },
    { nombre: 'Diego Ramírez', cedula: '001-9012345-9' },
    { nombre: 'Claudia Díaz', cedula: '001-0123456-0' },
    { nombre: 'Andrés Morales', cedula: '001-1234567-2' },
    { nombre: 'Patricia Jiménez', cedula: '001-2345678-3' },
    { nombre: 'Fernando Castillo', cedula: '001-3456789-4' },
    { nombre: 'Gabriela Herrera', cedula: '001-4567890-5' },
    { nombre: 'Héctor Ruiz', cedula: '001-5678901-6' },
    { nombre: 'Verónica Vargas', cedula: '001-6789012-7' },
    { nombre: 'Raúl Peña', cedula: '001-7890123-8' },
    { nombre: 'Carmen Castro', cedula: '001-8901234-9' },
    { nombre: 'Miguel Ángel', cedula: '001-9012345-0' },
    { nombre: 'Isabel Martínez', cedula: '001-0123456-1' },
    { nombre: 'Samuel López', cedula: '001-1234567-4' }
  ];

  filteredPatients : any = []


  @Output() pacienteSeleccionado = new EventEmitter<{ nombre: string; cedula: string }>();

  seleccionarPaciente(paciente: { nombre: string; cedula: string }) {
    this.pacienteSeleccionado.emit(paciente);
  }

  realizarBusqueda(busqueda: string) {
    this.filteredPatients = this.pacientes.filter(paciente =>
      paciente.nombre.toLowerCase().includes(busqueda.toLowerCase())
    );
  }

  limpiarBusqueda() {
    this.filteredPatients = [];
  }





}
