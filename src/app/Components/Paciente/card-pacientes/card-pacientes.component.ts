import { Component, EventEmitter, Input, Output } from '@angular/core';
import { PatientInterface } from '../../../Core/Interfaces/patient.interface';

@Component({
  selector: 'app-card-pacientes',
  standalone: true,
  imports: [],
  templateUrl: './card-pacientes.component.html',
  styleUrl: './card-pacientes.component.css'
})
export class CardPacientesComponent {

  @Input()
  pacient : PatientInterface | null = {
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
  }

  public pacientName = `${this.pacient?.first_name} ${this.pacient?.last_name} `

  constructor(){
    console.log(this.pacient)
  }


}
