import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-donante',
  standalone: true,
  imports: [],
  templateUrl: './card-donante.component.html',
  styleUrl: './card-donante.component.css'
})
export class CardDonanteComponent {
  @Input()
  charity : CharityInterface | null = null
}
