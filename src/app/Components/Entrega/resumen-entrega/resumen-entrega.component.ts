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

  constructor(private deliveryService : DeliveryService, private toastService : ToastrService){}

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
    console.log(this.delivery?.medications)
  }

  onQuantityDecreased(medicineId: number) {
    //disminución de cantidad
    this.deliveryService.decreaseMedicationQuantity(medicineId);
  }

  deletePatient(){
    const id= 0;
    const name = ''
    this.deliveryService.updatePatient(id, name)
    this.toastService.success("eliminado", "alerta")
  }

}
