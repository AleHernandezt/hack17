import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-card-pacientes',
  standalone: true,
  imports: [],
  templateUrl: './card-pacientes.component.html',
  styleUrl: './card-pacientes.component.css'
})
export class CardPacientesComponent {

  @Input()
  pacient : any


}
