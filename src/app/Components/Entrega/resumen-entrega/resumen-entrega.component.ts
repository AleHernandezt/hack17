import { Component } from '@angular/core';
import { DeliveryService } from '../../../Core/Services/delivery.service';
import { CommonModule } from '@angular/common';
import { ResumenPacienteComponent } from "../../Paciente/resumen-paciente/resumen-paciente.component";
import { DeliveryInterface } from '../../../Core/Interfaces/delivery.interface';
import { CardMedicamentoEntregaComponent } from "../../Medicinas/card-medicamento-entrega/card-medicamento-entrega.component";
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-resumen-entrega',
  standalone: true,
  imports: [CommonModule, ResumenPacienteComponent, CardMedicamentoEntregaComponent],
  templateUrl: './resumen-entrega.component.html',
  styleUrl: './resumen-entrega.component.css'
})
export class ResumenEntregaComponent {

  delivery : DeliveryInterface | null = null

  constructor(private deliveryService : DeliveryService, private toastService : ToastrService){
  }

  ngOnInit() {
    this.deliveryService.getDelivery().subscribe(delivery => {
      this.delivery = delivery;
    });

  }

  onMedicineDeleted(medicineId: number) {
    //eliminación de medicina
    this.deliveryService.removeMedication(medicineId);

  }

  onQuantityIncreased(medicineId: number) {
    //aumento de cantidad
    this.deliveryService.increaseMedicationQuantity(medicineId);
  }

  onQuantityDecreased(medicineId: number) {
    //disminución de cantidad
    this.deliveryService.decreaseMedicationQuantity(medicineId);
  }

  onExpireDateChange(event: Event) {
    const target = event.target as HTMLInputElement;
    if (target && target.value) {
      this.deliveryService.updateExpirationDate(target.value);
    }

    console.log(this.delivery)
  }

  onWithdrawalDateChange(event: Event) {
    const target = event.target as HTMLInputElement;
    if (target && target.value) {
      this.deliveryService.onWithdrawalDateChange(target.value);
    }

    console.log(this.delivery)
  }

  onApoinmentDateChange(event: Event) {
    const target = event.target as HTMLInputElement;
    if (target && target.value) {
      this.deliveryService.onApoinmentDateChange(target.value);
    }

    console.log(this.delivery)
  }

  deletePatient(){
    const id= 0;
    const idCard=0;
    const name = ''
    this.deliveryService.updatePatient(id,idCard, name)
    this.toastService.success("eliminado", "alerta")
  }

  public saveDelivery(): void {
    this.deliveryService.saveDelivery().subscribe(
      response => {
        if (response.success === false) {
          this.toastService.error("La entrega tiene errores", "Alerta");
          response.messages.forEach((message: string) => {
            this.toastService.error(message, "Alerta");
          });
        } else {
          console.log('Delivery saved successfully:', response);
          this.toastService.success("La entrega se guardó correctamente", "Éxito");
        }
      },
      error => {
        this.toastService.error("Ocurrió un error inesperado", "Alerta");
        console.error('Error inesperado:', error);
      }
    );
  }
}
