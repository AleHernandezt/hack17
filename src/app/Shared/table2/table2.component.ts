import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchBarInputComponent } from "../search-bar-input/search-bar-input.component";
import { SearchbarComponent } from "../searchbar/searchbar.component";

@Component({
  selector: 'app-table2',
  standalone: true,
  imports: [CommonModule, SearchBarInputComponent, SearchbarComponent],
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
