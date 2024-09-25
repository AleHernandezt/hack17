import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { DeliveryInterface, MedicationInterface } from '../Interfaces/delivery.interface'; // Asegúrate de que la ruta sea correcta
import { TreatmentInterface } from '../Interfaces/treatment.interface';

@Injectable({
  providedIn: 'root'
})
export class DeliveryService {
  private delivery: BehaviorSubject<DeliveryInterface> = new BehaviorSubject<DeliveryInterface>({
    patient_id: 0,
    treatment_id: 0,
    appointment_date: "",
    withdrawal_date: null,
    expiration_date: "",
    medications: []
  });

  constructor() {}

  public getDelivery(): Observable<DeliveryInterface> {
    return this.delivery.asObservable();
  }

  public setDelivery(newDelivery: DeliveryInterface): void {
    this.delivery.next(newDelivery);
  }

  public updateDelivery(updatedDelivery: Partial<DeliveryInterface>): void {
    const currentDelivery = this.delivery.getValue();
    this.delivery.next({ ...currentDelivery, ...updatedDelivery });
  }

  public updatePatient(idPatient: number, patientName: string): void {
    const currentDelivery = this.delivery.getValue();
    this.delivery.next({ ...currentDelivery, patient_id: idPatient });
  }

  public addMedicationsFromTreatment(treatment: TreatmentInterface): void {
    const currentDelivery = this.delivery.getValue();

    const newMedications: MedicationInterface[] = treatment.medications ? treatment.medications.map(med => ({
      name: med.name,
      delivery_details: {
        quantity: med.quantity
      }
    })) : [];

    const updatedMedications = [...currentDelivery.medications, ...newMedications];

    // Actualizar la entrega con la lista combinada de medicamentos
    this.updateDelivery({ medications: updatedMedications });
  }

  // Eliminar un medicamento específico
  public removeMedication(medicationId: number): void {
    const currentDelivery = this.delivery.getValue();
    const updatedMedications = currentDelivery.medications.filter(med => med.delivery_details.quantity !== medicationId);

    // Actualizar la entrega con la lista de medicamentos actualizada
    this.updateDelivery({ medications: updatedMedications });
  }
}
