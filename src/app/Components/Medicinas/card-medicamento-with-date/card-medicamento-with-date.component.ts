import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-card-medicamento-with-date',
  standalone: true,
  templateUrl: './card-medicamento-with-date.component.html',
  styleUrls: ['./card-medicamento-with-date.component.css']
})
export class CardMedicamentoWithDateComponent {
  @Input() medicine: any;
  @Output() medicineDeleted = new EventEmitter<string>();
  @Output() quantityIncreased = new EventEmitter<string>();
  @Output() quantityDecreased = new EventEmitter<string>();
  @Output() dateChanged = new EventEmitter<{ id: string, newDate: Date }>();

  deleteMedicine() {
    this.medicineDeleted.emit(this.medicine.id);
  }

  decreaseQuantity() {
    if (this.medicine.quantity > 0) {
      this.quantityDecreased.emit(this.medicine.id);
    }
  }

  increaseQuantity() {
    this.quantityIncreased.emit(this.medicine.id);
  }

  changeDate(event: Event) {
    const input = event.target as HTMLInputElement;
    const selectedDate = new Date(input.value);
    const currentDate = new Date();

    currentDate.setHours(0, 0, 0, 0);
    selectedDate.setHours(0, 0, 0, 0);


    if (selectedDate < currentDate) {
      selectedDate.setTime(currentDate.getTime());
      input.value = currentDate.toISOString().split('T')[0];
    }

    this.dateChanged.emit({ id: this.medicine.id, newDate: selectedDate });
  }
}
