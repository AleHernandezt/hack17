import { Component, Input } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { Router } from '@angular/router';

@Component({
  selector: 'app-btn',
  standalone: true,
  imports: [ButtonModule],
  templateUrl: './btn.component.html',
  styleUrls: ['./btn.component.css']
})
export class BtnComponent {
  @Input() label: string = 'Botón';
  @Input() disabled: boolean = false;  // Agrega esta línea

  constructor(private router: Router) {}

  handleClick() {
    // Aquí puedes manejar la lógica para formularios o navegación
    this.router.navigate(['/ruta-destino']);
  }
}
