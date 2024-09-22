import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-table2',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './table2.component.html',
  styleUrls: ['./table2.component.css']
})
export class Table2Component<T extends Record<string, any>> {

  //aray de objetos

  @Input()
  items: T[] = [];

  //se emiten eventos para capturar en el padre

  @Output() edit = new EventEmitter<T>();
  @Output() delete = new EventEmitter<T>();

  get headers(): string[] {
    return this.items.length > 0 ? Object.keys(this.items[0]) : [];
  }
}
