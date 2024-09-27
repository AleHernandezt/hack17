import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TreatmentInterface } from '../../../Core/Interfaces/treatment.interface';
import { CardTratamientoComponent } from "../card-tratamiento/card-tratamiento.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-lista-tratamiento',
  standalone: true,
  imports: [CardTratamientoComponent, CommonModule],
  templateUrl: './lista-tratamiento.component.html',
  styleUrl: './lista-tratamiento.component.css'
})
export class ListaTratamientoComponent {

    @Input()
    idPaciente : number | null = null

    treatments: TreatmentInterface[] = [
    {
      id: 1,
      patient_id: 65692780,
      patientName: "John Doe",
      observation: "Initial check-up",
      status: "supplied",
      active: "active",
      medications: [
        { id: 201, name: "Medication A", quantity: 2 }
      ],
      createdAt: new Date('2023-01-01'),
      updatedAt: new Date('2023-01-02'),
    },
    {
      id: 2,
      patient_id: 65692780,
      patientName: "Jane Smith",
      observation: "Follow-up visit",
      status: "partially supplied",
      active: "active",
      medications: [
        { id: 202, name: "Medication B", quantity: 1 }
      ],
      createdAt: new Date('2023-01-03'),
      updatedAt: new Date('2023-01-04'),
    },
    {
      id: 3,
      patient_id: 65692780,
      patientName: "Alice Johnson",
      observation: "Routine examination",
      status: "supplied",
      active: "active",
      medications: [
        { id: 203, name: "Medication C", quantity: 1 }
      ],
      createdAt: new Date('2023-01-05'),
      updatedAt: new Date('2023-01-06'),
    },
    {
      id: 4,
      patient_id: 1,
      patientName: "Bob Brown",
      observation: "Consultation for headache",
      status: "supplied",
      active: "active",
      medications: [
        { id: 204, name: "Medication D", quantity: 3 }
      ],
      createdAt: new Date('2023-01-07'),
      updatedAt: new Date('2023-01-08'),
    },
    {
      id: 5,
      patient_id: 1,
      patientName: "Charlie Davis",
      observation: "Annual check-up",
      status: "partially supplied",
      active: "active",
      medications: [
        { id: 205, name: "Medication E", quantity: 2 }
      ],
      createdAt: new Date('2023-01-09'),
      updatedAt: new Date('2023-01-10'),
    },
    {
      id: 6,
      patient_id: 1,
      patientName: "Diana Evans",
      observation: "Treatment for flu",
      status: "supplied",
      active: "active",
      medications: [
        { id: 206, name: "Medication F", quantity: 2 }
      ],
      createdAt: new Date('2023-01-11'),
      updatedAt: new Date('2023-01-12'),
    },
    {
      id: 7,
      patient_id: 2,
      patientName: "Edward Foster",
      observation: "Follow-up for diabetes",
      status: "supplied",
      active: "active",
      medications: [
        { id: 207, name: "Medication G", quantity: 1 }
      ],
      createdAt: new Date('2023-01-13'),
      updatedAt: new Date('2023-01-14'),
    },
    {
      id: 8,
      patient_id: 65692780,
      patientName: "Fiona Green",
      observation: "Check-up for hypertension",
      status: "partially supplied",
      active: "active",
      medications: [
        { id: 208, name: "Medication H", quantity: 1 }
      ],
      createdAt: new Date('2023-01-15'),
      updatedAt: new Date('2023-01-16'),
    },
    {
      id: 9,
      patient_id: 5,
      patientName: "George Harris",
      observation: "Post-surgery check",
      status: "supplied",
      active: "active",
      medications: [
        { id: 209, name: "Medication I", quantity: 2 }
      ],
      createdAt: new Date('2023-01-17'),
      updatedAt: new Date('2023-01-18'),
    },
    {
      id: 10,
      patient_id: 5,
      patientName: "Hannah Ives",
      observation: "Routine blood test",
      status: "supplied",
      active: "active",
      medications: [
        { id: 210, name: "Medication J", quantity: 1 }
      ],
      createdAt: new Date('2023-01-19'),
      updatedAt: new Date('2023-01-20'),
    },
    {
      id: 11,
      patient_id: 2,
      patientName: "Ian Johnson",
      observation: "Skin allergy treatment",
      status: "supplied",
      active: "active",
      medications: [
        { id: 211, name: "Medication K", quantity: 1 }
      ],
      createdAt: new Date('2023-01-21'),
      updatedAt: new Date('2023-01-22'),
    },
    {
      id: 12,
      patient_id: 3,
      patientName: "Julia King",
      observation: "Check-up for asthma",
      status: "partially supplied",
      active: "active",
      medications: [
        { id: 212, name: "Medication L", quantity: 2 }
      ],
      createdAt: new Date('2023-01-23'),
      updatedAt: new Date('2023-01-24'),
    },
    {
      id: 13,
      patient_id: 4,
      patientName: "Kevin Lee",
      observation: "Follow-up on back pain",
      status: "supplied",
      active: "active",
      medications: [
        { id: 213, name: "Medication M", quantity: 1 }
      ],
      createdAt: new Date('2023-01-25'),
      updatedAt: new Date('2023-01-26'),
    },
    {
      id: 14,
      patient_id: 5,
      patientName: "Lisa Moore",
      observation: "Consultation for fatigue",
      status: "supplied",
      active: "active",
      medications: [
        { id: 214, name: "Medication N", quantity: 1 }
      ],
      createdAt: new Date('2023-01-27'),
      updatedAt: new Date('2023-01-28'),
    },
    {
      id: 15,
      patient_id: 2,
      patientName: "Mark Nelson",
      observation: "Routine eye exam",
      status: "partially supplied",
      active: "active",
      medications: [
        { id: 215, name: "Medication O", quantity: 1 }
      ],
      createdAt: new Date('2023-01-29'),
      updatedAt: new Date('2023-01-30'),
    },
    {
      id: 16,
      patient_id: 4,
      patientName: "Nina Ortiz",
      observation: "Check-up for cholesterol",
      status: "supplied",
      active: "active",
      medications: [
        { id: 216, name: "Medication P", quantity: 1 }
      ],
      createdAt: new Date('2023-01-31'),
      updatedAt: new Date('2023-02-01'),
    },
    {
      id: 17,
      patient_id: 4,
      patientName: "Oscar Perez",
      observation: "Dental check-up",
      status: "supplied",
      active: "active",
      medications: [
        { id: 217, name: "Medication Q", quantity: 1 }
      ],
      createdAt: new Date('2023-02-02'),
      updatedAt: new Date('2023-02-03'),
    },
    {
      id: 18,
      patient_id: 5,
      patientName: "Paula Quinn",
      observation: "Consultation for rash",
      status: "partially supplied",
      active: "active",
      medications: [
        { id: 218, name: "Medication R", quantity: 1 }
      ],
      createdAt: new Date('2023-02-04'),
      updatedAt: new Date('2023-02-05'),
    },
    {
      id: 19,
      patient_id: 1,
      patientName: "Quincy Reed",
      observation: "Follow-up for joint pain",
      status: "supplied",
      active: "active",
      medications: [
        { id: 219, name: "Medication S", quantity: 2 }
      ],
      createdAt: new Date('2023-02-06'),
      updatedAt: new Date('2023-02-07'),
    },
    {
      id: 20,
      patient_id: 120,
      patientName: "Rachel Smith",
      observation: "Routine health screening",
      status: "supplied",
      active: "active",
      medications: [
        { id: 220, name: "Medication T", quantity: 1 }
      ],
      createdAt: new Date('2023-02-08'),
      updatedAt: new Date('2023-02-09'),
    },
    {
      id: 21,
      patient_id: 121,
      patientName: "Steve Taylor",
      observation: "Consultation for nutrition",
      status: "supplied",
      active: "active",
      medications: [
        { id: 221, name: "Medication U", quantity: 2 }
      ],
      createdAt: new Date('2023-02-10'),
      updatedAt: new Date('2023-02-11'),
    },
    {
      id: 22,
      patient_id: 122,
      patientName: "Tracy Underwood",
      observation: "Annual vaccination",
      status: "partially supplied",
      active: "active",
      medications: [
        { id: 222, name: "Medication V", quantity: 1 }
      ],
      createdAt: new Date('2023-02-12'),
      updatedAt: new Date('2023-02-13'),
    },
  ];

  filteredTreatments: TreatmentInterface[] = [];


  @Output() tratamientoSeleccionado = new EventEmitter<TreatmentInterface>();

  constructor() {
    this.filterTreatments();
  }

  seleccionarTratamiento(tratamiento: TreatmentInterface) {
    this.tratamientoSeleccionado.emit(tratamiento);
  }

  ngOnChanges() {
    this.filterTreatments(); // Filtra al cambiar idPaciente
  }

  filterTreatments() {
    console.log(this.idPaciente)
    if (this.idPaciente !== null) {
      this.filteredTreatments = this.treatments.filter(treatment => treatment.patient_id === this.idPaciente);
    } else {
      return
    }
  }

}
