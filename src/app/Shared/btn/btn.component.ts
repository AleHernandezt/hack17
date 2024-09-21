import { Component, Input } from '@angular/core';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-btn',
  standalone: true,
  imports: [ButtonModule],
  templateUrl: './btn.component.html',
  styleUrl: './btn.component.css'
})
export class BtnComponent {
  @Input() label: string = 'Boton';

}
