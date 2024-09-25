import { Component } from '@angular/core';
import { ListaDonanteComponent } from "../../../Components/Donante/lista-donante/lista-donante.component";
import { ListaTratamientoComponent } from "../../../Components/Tratamientos/lista-tratamiento/lista-tratamiento.component";
import { ResumenDonacionComponent } from "../../../Components/Donacion/resumen-donacion/resumen-donacion.component";
import { DonationInterface } from '../../../Core/Interfaces/donation.interface';
import { DonationService } from '../../../Core/Services/donation.service';
import { CharityInterface } from '../../../Core/Interfaces/charity.interface';

import { DeliveryService } from '../../../Core/Services/delivery.service';
import { PatientInterface } from '../../../Core/Interfaces/patient.interface';
import { TreatmentInterface } from '../../../Core/Interfaces/treatment.interface';
import { ListaPacientesComponent } from "../../../Components/Paciente/lista-pacientes/lista-pacientes.component";
import { DeliveryInterface } from '../../../Core/Interfaces/delivery.interface';


@Component({
  selector: 'app-form-entrega',
  standalone: true,
  imports: [ListaDonanteComponent, ListaTratamientoComponent, ResumenDonacionComponent, ListaPacientesComponent],
  templateUrl: './form-entrega.component.html',
  styleUrls: ['./form-entrega.component.css'] // Cambiado a styleUrls
})
export class FormEntregaComponent {
  delivery: DeliveryInterface | null = null;

  constructor(private deliveryService: DeliveryService) {}

  ngOnInit() {
    this.deliveryService.getDelivery().subscribe(delivery => {
      this.delivery = delivery;
    });
  }


  onPacienteSeleccionado(paciente: PatientInterface) {
    this.deliveryService.updatePatient(paciente.id!, `${paciente.first_name} ${paciente.last_name}`);
  }

  onTratamientoSeleccionado(tratamiento: TreatmentInterface) {
    this.deliveryService.updateDelivery({treatment_id : tratamiento.id!});
  }
}
