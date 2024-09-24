import { Component, Input } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { FloatLabelModule } from 'primeng/floatlabel';

@Component({
  selector: 'app-input-text',
  standalone: true,
  imports: [FormsModule, InputTextModule, FloatLabelModule],
  templateUrl: './input-text.component.html',
  styleUrls: ['./input-text.component.css']
})
export class InputTextComponent {
  @Input() label: string = '';
  value: string | undefined;

}