import { Component, EventEmitter, Output } from '@angular/core';
import { CardPacientesComponent } from "../card-pacientes/card-pacientes.component";
import { CommonModule } from '@angular/common';
import { SearchBarInputComponent } from "../../../Shared/search-bar-input/search-bar-input.component";
import { PatientInterface } from '../../../Core/Interfaces/patient.interface';

@Component({
  selector: 'app-lista-pacientes',
  standalone: true,
  imports: [CardPacientesComponent, CommonModule, SearchBarInputComponent],
  templateUrl: './lista-pacientes.component.html',
  styleUrl: './lista-pacientes.component.css'
})
export class ListaPacientesComponent {


  pacientes: PatientInterface[] = [
    {
      id: 1,
      community_id: 101,
      first_name: 'Juan',
      last_name: 'Pérez',
      birth_date: new Date('1985-01-15'),
      email: 'juan.perez@example.com',
      id_card: '001-1234567-1',
      phone: '555-1234',
      address: 'Calle Falsa 123',
      gender: 'male',
      status: 'active',
      pathologies: [],
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: 2,
      community_id: 102,
      first_name: 'María',
      last_name: 'López',
      birth_date: new Date('1990-03-22'),
      email: 'maria.lopez@example.com',
      id_card: '001-2345678-2',
      phone: '555-2345',
      address: 'Avenida Siempre Viva 456',
      gender: 'female',
      status: 'active',
      pathologies: [],
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: 3,
      community_id: 103,
      first_name: 'Carlos',
      last_name: 'Sánchez',
      birth_date: new Date('1988-07-30'),
      email: 'carlos.sanchez@example.com',
      id_card: '001-3456789-3',
      phone: '555-3456',
      address: 'Boulevard de los Sueños Rotos 789',
      gender: 'male',
      status: 'active',
      pathologies: [],
      createdAt: new Date(),
      updatedAt: new Date()
    },
    // Agrega los demás pacientes siguiendo el mismo patrón
    {
      id: 4,
      community_id: 104,
      first_name: 'Ana',
      last_name: 'Gómez',
      birth_date: new Date('1992-05-18'),
      email: 'ana.gomez@example.com',
      id_card: '001-4567890-4',
      phone: '555-4567',
      address: 'Calle de la Amargura 321',
      gender: 'female',
      status: 'active',
      pathologies: [],
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: 5,
      community_id: 105,
      first_name: 'Luis',
      last_name: 'Martínez',
      birth_date: new Date('1983-11-05'),
      email: 'luis.martinez@example.com',
      id_card: '001-5678901-5',
      phone: '555-5678',
      address: 'Camino de la Esperanza 654',
      gender: 'male',
      status: 'active',
      pathologies: [],
      createdAt: new Date(),
      updatedAt: new Date()
    },
    // Continua para los demás pacientes
  ];

  filteredPatients : PatientInterface[]  = []


  @Output() pacienteSeleccionado = new EventEmitter<PatientInterface>();

  seleccionarPaciente(paciente: PatientInterface) {
    this.pacienteSeleccionado.emit(paciente);
  }

  realizarBusqueda(busqueda: string) {
    this.filteredPatients = this.pacientes.filter(paciente =>
      paciente.id_card.toLowerCase().includes(busqueda.toLowerCase())
    );
  }

  limpiarBusqueda() {
    this.filteredPatients = [];
  }






}
