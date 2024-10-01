import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import {
  DeliveryInterface,
  MedicationInterface,
} from '../Interfaces/delivery.interface'; // Asegúrate de que la ruta sea correcta
import { TreatmentInterface } from '../Interfaces/treatment.interface';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { appSettings } from '../../settings/appsettings';
import { getCookieHeader } from '../../custom/getCookieHeader';

@Injectable({
  providedIn: 'root',
})
export class DeliveryService {
  private delivery: BehaviorSubject<DeliveryInterface> =
    new BehaviorSubject<DeliveryInterface>({
      patient_id: 0,
      patientidCard: 0,
      treatment_id: 0,
      appointment_date: '',
      withdrawal_date: null,
      expiration_date: '',
      medications: [],
    });

  private apiURL = `${appSettings.apiUrl}delivery/`;

  constructor(private http: HttpClient) {}

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

  public updatePatient(
    idPatient: number,
    patientcardId: number,
    patientName: string
  ): void {
    const currentDelivery = this.delivery.getValue();
    this.delivery.next({
      ...currentDelivery,
      patient_id: idPatient,
      patientidCard: patientcardId,
      patient_name: patientName,
    });
  }

  public addMedicationsFromTreatment(treatment: TreatmentInterface): void {
    console.log(treatment);
    const newMedications: MedicationInterface[] = treatment.medications
      ? treatment.medications.map((med) => ({
          id: med.id,
          name: med.name,
          delivery_details: {
            quantity: 0,
            max_quantity: med.quantity,
          },
        }))
      : [];

    const updatedMedications = [...newMedications];
    this.updateDelivery({ medications: updatedMedications });
  }

  public removeMedication(medicationId: number): void {
    const currentDelivery = this.delivery.getValue();
    const updatedMedications = currentDelivery.medications.filter(
      (med) => med.delivery_details.quantity !== medicationId
    );
    this.updateDelivery({ medications: updatedMedications });
  }

  public increaseMedicationQuantity(
    medicationId: number,
    amount: number = 1
  ): void {
    const currentDelivery = this.delivery.getValue();
    const updatedMedications = currentDelivery.medications.map((med) => {
      if (med.id === medicationId) {
        return {
          ...med,
          delivery_details: {
            quantity: med.delivery_details.quantity + amount,
            max_quantity: med.delivery_details.max_quantity,
          },
        };
      }
      return med;
    });
    this.updateDelivery({ medications: updatedMedications });
    console.log(this.delivery.getValue());
  }

  public decreaseMedicationQuantity(
    medicationId: number,
    amount: number = 1
  ): void {
    const currentDelivery = this.delivery.getValue();
    const updatedMedications = currentDelivery.medications.map((med) => {
      if (med.id === medicationId) {
        const newQuantity = med.delivery_details.quantity - amount;
        return {
          ...med,
          delivery_details: {
            quantity: newQuantity > 0 ? newQuantity : 0,
            max_quantity: med.delivery_details.max_quantity,
          },
        };
      }
      return med;
    });
    this.updateDelivery({ medications: updatedMedications });
  }

  public updateExpirationDate(expirationDate: string): void {
    const currentDelivery = this.delivery.getValue();
    this.delivery.next({ ...currentDelivery, expiration_date: expirationDate });
  }
  public onApoinmentDateChange(expirationDate: string): void {
    const currentDelivery = this.delivery.getValue();
    console.log('holaaaa');
    this.delivery.next({
      ...currentDelivery,
      appointment_date: expirationDate,
    });
  }
  public onWithdrawalDateChange(expirationDate: string): void {
    const currentDelivery = this.delivery.getValue();
    this.delivery.next({ ...currentDelivery, withdrawal_date: expirationDate });
  }

  public saveDelivery(): Observable<any> {
    const delivery = this.delivery.getValue();
    const { headerPost } = getCookieHeader();

    const data = {
      patient_id: delivery.patient_id,
      treatment_id: delivery.treatment_id,
      appointment_date: delivery.appointment_date,
      withdrawal_date: delivery.withdrawal_date,
      expiration_date: delivery.expiration_date,
      medications: delivery.medications.map((med) => {
        return {
          medication_id: med.id,
          quantity: med.delivery_details.quantity,
        };
      }),
    };

    return this.http.post(`${this.apiURL}create`, data, {
      headers: headerPost,
    });
  }
}
