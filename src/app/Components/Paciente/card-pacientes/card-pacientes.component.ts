import { Component, EventEmitter, Input, Output, OnChanges, SimpleChanges } from '@angular/core';
import { PatientInterface } from '../../../Core/Interfaces/patient.interface';

@Component({
  selector: 'app-card-pacientes',
  standalone: true,
  imports: [],
  templateUrl: './card-pacientes.component.html',
  styleUrls: ['./card-pacientes.component.css'] // Cambiado a styleUrls
})
export class CardPacientesComponent implements OnChanges {

  @Input()
  pacient: PatientInterface | null = null;

  public pacientName: string = '';

  ngOnChanges(changes: SimpleChanges) {
    if (changes['pacient'] && this.pacient) {
      this.pacientName = `${this.pacient.first_name} ${this.pacient.last_name}`;
    }
  }

  constructor() {
    console.log(this.pacient);
  }
}
