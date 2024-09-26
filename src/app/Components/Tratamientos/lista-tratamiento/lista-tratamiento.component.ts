import { Component, EventEmitter, Output } from '@angular/core';
import { TreatmentInterface } from '../../../Core/Interfaces/treatment.interface';
import { CardTratamientoComponent } from "../card-tratamiento/card-tratamiento.component";

@Component({
  selector: 'app-lista-tratamiento',
  standalone: true,
  imports: [CardTratamientoComponent],
  templateUrl: './lista-tratamiento.component.html',
  styleUrl: './lista-tratamiento.component.css'
})
export class ListaTratamientoComponent {
    treatments: TreatmentInterface[] = [
    {
      id: 1,
      patient_id: 101,
      observation: "Initial check-up",
      status: "supplied",
      active: "active",
      medications: [
        { id: 201, quantity: 2 }
      ],
      createdAt: new Date('2023-01-01'),
      updatedAt: new Date('2023-01-02'),
    },
    {
      id: 2,
      patient_id: 102,
      observation: "Follow-up visit",
      status: "partially supplied",
      active: "active",
      medications: [
        { medication_id: 202, quantity: 1 }
      ],
      createdAt: new Date('2023-01-03'),
      updatedAt: new Date('2023-01-04'),
    },
    {
      id: 3,
      patient_id: 103,
      observation: "Routine examination",
      status: "supplied",
      active: "active",
      medications: [
        { medication_id: 203, quantity: 1 }
      ],
      createdAt: new Date('2023-01-05'),
      updatedAt: new Date('2023-01-06'),
    },
    {
      id: 4,
      patient_id: 104,
      observation: "Consultation for headache",
      status: "supplied",
      active: "active",
      medications: [
        { medication_id: 204, quantity: 3 }
      ],
      createdAt: new Date('2023-01-07'),
      updatedAt: new Date('2023-01-08'),
    },
    {
      id: 5,
      patient_id: 105,
      observation: "Annual check-up",
      status: "partially supplied",
      active: "active",
      medications: [
        { medication_id: 205, quantity: "2" }
      ],
      createdAt: new Date('2023-01-09'),
      updatedAt: new Date('2023-01-10'),
    },
    {
      id: 6,
      patient_id: 106,
      observation: "Treatment for flu",
      status: "supplied",
      active: "active",
      medications: [
        { medication_id: 206, quantity: "2" }
      ],
      createdAt: new Date('2023-01-11'),
      updatedAt: new Date('2023-01-12'),
    },
    {
      id: 7,
      patient_id: 107,
      observation: "Follow-up for diabetes",
      status: "supplied",
      active: "active",
      medications: [
        { medication_id: 207, quantity: "1" }
      ],
      createdAt: new Date('2023-01-13'),
      updatedAt: new Date('2023-01-14'),
    },
    {
      id: 8,
      patient_id: 108,
      observation: "Check-up for hypertension",
      status: "partially supplied",
      active: "active",
      medications: [
        { medication_id: 208, quantity: "1" }
      ],
      createdAt: new Date('2023-01-15'),
      updatedAt: new Date('2023-01-16'),
    },
    {
      id: 9,
      patient_id: 109,
      observation: "Post-surgery check",
      status: "supplied",
      active: "active",
      medications: [
        { medication_id: 209, quantity: "2" }
      ],
      createdAt: new Date('2023-01-17'),
      updatedAt: new Date('2023-01-18'),
    },
    {
      id: 10,
      patient_id: 110,
      observation: "Routine blood test",
      status: "supplied",
      active: "active",
      medications: [
        { medication_id: 210, quantity: "1" }
      ],
      createdAt: new Date('2023-01-19'),
      updatedAt: new Date('2023-01-20'),
    },
    {
      id: 11,
      patient_id: 111,
      observation: "Skin allergy treatment",
      status: "supplied",
      active: "active",
      medications: [
        { medication_id: 211, quantity: "1" }
      ],
      createdAt: new Date('2023-01-21'),
      updatedAt: new Date('2023-01-22'),
    },
    {
      id: 12,
      patient_id: 112,
      observation: "Check-up for asthma",
      status: "partially supplied",
      active: "active",
      medications: [
        { medication_id: 212, quantity: "2" }
      ],
      createdAt: new Date('2023-01-23'),
      updatedAt: new Date('2023-01-24'),
    },
    {
      id: 13,
      patient_id: 113,
      observation: "Follow-up on back pain",
      status: "supplied",
      active: "active",
      medications: [
        { medication_id: 213, quantity: "1" }
      ],
      createdAt: new Date('2023-01-25'),
      updatedAt: new Date('2023-01-26'),
    },
    {
      id: 14,
      patient_id: 114,
      observation: "Consultation for fatigue",
      status: "supplied",
      active: "active",
      medications: [
        { medication_id: 214, quantity: "1" }
      ],
      createdAt: new Date('2023-01-27'),
      updatedAt: new Date('2023-01-28'),
    },
    {
      id: 15,
      patient_id: 115,
      observation: "Routine eye exam",
      status: "partially supplied",
      active: "active",
      medications: [
        { medication_id: 215, quantity: "1" }
      ],
      createdAt: new Date('2023-01-29'),
      updatedAt: new Date('2023-01-30'),
    },
    {
      id: 16,
      patient_id: 116,
      observation: "Check-up for cholesterol",
      status: "supplied",
      active: "active",
      medications: [
        { medication_id: 216, quantity: "1" }
      ],
      createdAt: new Date('2023-01-31'),
      updatedAt: new Date('2023-02-01'),
    },
    {
      id: 17,
      patient_id: 117,
      observation: "Dental check-up",
      status: "supplied",
      active: "active",
      medications: [
        { medication_id: 217, quantity: "1" }
      ],
      createdAt: new Date('2023-02-02'),
      updatedAt: new Date('2023-02-03'),
    },
    {
      id: 18,
      patient_id: 118,
      observation: "Consultation for rash",
      status: "partially supplied",
      active: "active",
      medications: [
        { medication_id: 218, quantity: "1" }
      ],
      createdAt: new Date('2023-02-04'),
      updatedAt: new Date('2023-02-05'),
    },
    {
      id: 19,
      patient_id: 119,
      observation: "Follow-up for joint pain",
      status: "supplied",
      active: "active",
      medications: [
        { medication_id: 219, quantity: "2" }
      ],
      createdAt: new Date('2023-02-06'),
      updatedAt: new Date('2023-02-07'),
    },
    {
      id: 20,
      patient_id: 120,
      observation: "Routine health screening",
      status: "supplied",
      active: "active",
      medications: [
        { medication_id: 220, quantity: "1" }
      ],
      createdAt: new Date('2023-02-08'),
      updatedAt: new Date('2023-02-09'),
    },
    {
      id: 21,
      patient_id: 121,
      observation: "Consultation for nutrition",
      status: "supplied",
      active: "active",
      medications: [
        { medication_id: 221, quantity: "2" }
      ],
      createdAt: new Date('2023-02-10'),
      updatedAt: new Date('2023-02-11'),
    },
    {
      id: 22,
      patient_id: 122,
      observation: "Annual vaccination",
      status: "partially supplied",
      active: "active",
      medications: [
        { medication_id: 222, quantity: "1" }
      ],
      createdAt: new Date('2023-02-12'),
      updatedAt: new Date('2023-02-13'),
    },
  ];

  filteredTreatments : TreatmentInterface | null = null


  @Output() tratamientoSeleccionado = new EventEmitter<TreatmentInterface>();

  seleccionarTratamiento(tratamiento : TreatmentInterface) {
    this.tratamientoSeleccionado.emit(tratamiento);
  }







}
