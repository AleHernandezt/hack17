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
    this.delivery.next({ ...currentDelivery, patient_id: idPatient, patient_name: patientName });
  }

  public addMedicationsFromTreatment(treatment: TreatmentInterface): void {
    const currentDelivery = this.delivery.getValue();
    const newMedications: MedicationInterface[] = treatment.medications ? treatment.medications.map(med => ({
      id: med.id,
      name: med.name,
      delivery_details: {
        quantity: 0
      }
    })) : [];

    const updatedMedications = [...currentDelivery.medications, ...newMedications];
    this.updateDelivery({ medications: updatedMedications });
  }

  // Eliminar un medicamento específico
  public removeMedication(medicationId: number): void {
    const currentDelivery = this.delivery.getValue();
    const updatedMedications = currentDelivery.medications.filter(med => med.delivery_details.quantity !== medicationId);
    this.updateDelivery({ medications: updatedMedications });
  }

  // Aumentar la cantidad de un medicamento
  public increaseMedicationQuantity(medicationId: number, amount: number = 1): void {
    const currentDelivery = this.delivery.getValue();
    const updatedMedications = currentDelivery.medications.map(med => {
      if (med.id === medicationId) { // Cambiado para comparar con el id
        return {
          ...med,
          delivery_details: {
            quantity: med.delivery_details.quantity + amount
          }
        };
      }
      return med;
    });
    this.updateDelivery({ medications: updatedMedications });
  }

  // Disminuir la cantidad de un medicamento
  public decreaseMedicationQuantity(medicationId: number, amount: number = 1): void {
    const currentDelivery = this.delivery.getValue();
    alert(medicationId)
    const updatedMedications = currentDelivery.medications.map(med => {
      if (med.id === medicationId) { // Cambiado para comparar con el id
        const newQuantity = med.delivery_details.quantity - amount;
        alert("hola")
        return {
          ...med,
          delivery_details: {
            quantity: newQuantity > 0 ? newQuantity : 0 // Asegurarse de que la cantidad no sea negativa
          }
        };
      }
      return med;
    });
    this.updateDelivery({ medications: updatedMedications });
  }
}
