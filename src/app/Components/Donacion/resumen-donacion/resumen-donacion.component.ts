import { Component } from '@angular/core';
import { TreatmentService } from '../../../Core/Services/treatment.service';
import { ResumenTratamientoComponent } from "../../Tratamientos/resumen-tratamiento/resumen-tratamiento.component";
import { ResumenMedicinaComponent } from "../../Medicinas/resumen-medicina/resumen-medicina.component";
import { ResumenPacienteComponent } from "../../Paciente/resumen-paciente/resumen-paciente.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-resumen-donacion',
  standalone: true,
  imports: [ResumenTratamientoComponent, ResumenMedicinaComponent, ResumenPacienteComponent, CommonModule],
  templateUrl: './resumen-donacion.component.html',
  styleUrl: './resumen-donacion.component.css'
})
export class ResumenDonacionComponent {
  treatment: any = {};

  constructor(private treatmentService: TreatmentService) {}

  ngOnInit() {
    this.treatmentService.getTreatment().subscribe(data => {
      this.treatment = data;
    });
  }

  onMedicineDeleted(medicineId: string) {
    //eliminación de medicina
    this.treatmentService.removeMedication(medicineId);
  }

  onQuantityIncreased(medicineId: string) {
    //aumento de cantidad
    this.treatmentService.increaseMedicationQuantity(medicineId);
  }

  onQuantityDecreased(medicineId: string) {
    //disminución de cantidad
    this.treatmentService.decreaseMedicationQuantity(medicineId);
  }

  deletePatient(){
    const id= '';
    const name= ''
    this.treatmentService.updatePatient(id,name)

  }
}
