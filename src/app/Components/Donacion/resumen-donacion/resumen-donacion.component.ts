import { Component } from '@angular/core';
import { DonationService } from '../../../Core/Services/donation.service';
import { ResumenTratamientoComponent } from "../../Tratamientos/resumen-tratamiento/resumen-tratamiento.component";
import { ResumenMedicinaComponent } from "../../Medicinas/resumen-medicina/resumen-medicina.component";
import { ResumenPacienteComponent } from "../../Paciente/resumen-paciente/resumen-paciente.component";
import { CommonModule } from '@angular/common';
import { ResumenDonanteComponent } from "../../Donante/resumen-donante/resumen-donante.component";
import { DonationInterface } from '../../../Core/Interfaces/donation.interface';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-resumen-donacion',
  standalone: true,
  imports: [ResumenTratamientoComponent, ResumenMedicinaComponent, ResumenPacienteComponent, CommonModule, ResumenDonanteComponent],
  templateUrl: './resumen-donacion.component.html',
  styleUrls: ['./resumen-donacion.component.css']
})
export class ResumenDonacionComponent {
  donation: DonationInterface | null = null;
  private donationSubscription: Subscription |null = null;

  constructor(private donationService: DonationService) {}

  ngOnInit() {
    this.donationSubscription = this.donationService.getDonation().subscribe(data => {
      this.donation = data;
    });
  }

  ngOnDestroy() {

    if (this.donationSubscription) {
      this.donationSubscription.unsubscribe();
    }
  }

  onMedicineDeleted(medicineId: number) {
    // Eliminación de medicina
    this.donationService.removeMedication(medicineId);
  }

  onQuantityIncreased(medicineId: number) {
    // Aumento de cantidad
    this.donationService.increaseMedicationQuantity(medicineId);
  }

  onQuantityDecreased(medicineId: number) {
    // Disminución de cantidad
    this.donationService.decreaseMedicationQuantity(medicineId);
  }

  deleteCharity() {
    const id = 0;
    const name = '';
    this.donationService.updateCharity(id, name);
  }
}
