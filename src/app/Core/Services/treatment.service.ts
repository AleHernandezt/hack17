import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { TreatmentInterface } from '../Interfaces/treatment.interface';
import { MedicationInterface } from '../Interfaces/medication.interface';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { appSettings } from '../../settings/appsettings';
import { getCookieHeader } from '../../custom/getCookieHeader';

@Injectable({
  providedIn: 'root',
})
export class TreatmentService {
  private apiURL = `${appSettings.apiUrl}treatment`;

  public treatment: BehaviorSubject<TreatmentInterface> =
    new BehaviorSubject<TreatmentInterface>({
      patient_id: 0,
      patientName: '',
      observation: '',
      medications: [],
    });

  private data: Observable<any> = this.treatment.asObservable();

  constructor(private http: HttpClient) {}

  public updateTreatment(newTreatment: any): void {
    this.treatment.next(newTreatment);
  }

  public updatePatient(id: number, name: string): void {
    const newTreatment = {
      ...this.treatment.getValue(),
      patient_id: id,
      patientName: name,
    };

    this.updateTreatment(newTreatment);
  }

  public updateObservation(observation: string): void {
    const currentTreatment = this.treatment.getValue();
    const newTreatment = {
      ...currentTreatment,
      observation: observation,
    };

    this.updateTreatment(newTreatment);
  }

  public addMedication(id: number, name: string, quantity: number): void {
    const currentTreatment = this.treatment.getValue();

    const existingMedicationIndex = currentTreatment.medications!.findIndex(
      (med: MedicationInterface) => med.id === id
    );

    let newMedications;

    if (existingMedicationIndex !== -1) {
      const existingMedication =
        currentTreatment.medications![existingMedicationIndex];
      existingMedication.quantity += quantity;

      newMedications = [
        ...currentTreatment.medications!.slice(0, existingMedicationIndex),
        existingMedication,
        ...currentTreatment.medications!.slice(existingMedicationIndex + 1),
      ];
    } else {
      newMedications = [
        ...currentTreatment.medications!,
        { id, name, quantity },
      ];
    }

    const newTreatment = {
      ...currentTreatment,
      medications: newMedications,
    };

    this.updateTreatment(newTreatment);
  }

  public removeMedication(medicineId: string): void {
    const currentTreatment = this.treatment.getValue();
    const newMedications = currentTreatment.medications!.filter(
      (med: any) => med.id !== medicineId
    );

    const newTreatment = {
      ...currentTreatment,
      medications: newMedications,
    };

    this.updateTreatment(newTreatment);
  }

  public increaseMedicationQuantity(medicineId: string): void {
    const currentTreatment = this.treatment.getValue();
    const newMedications = currentTreatment.medications!.map(
      (medication: any) => {
        if (medication.id === medicineId) {
          return { ...medication, quantity: medication.quantity + 1 };
        }
        return medication;
      }
    );

    const newTreatment = {
      ...currentTreatment,
      medications: newMedications,
    };

    this.updateTreatment(newTreatment);
  }

  public decreaseMedicationQuantity(medicineId: string): void {
    const currentTreatment = this.treatment.getValue();

    const newMedications = currentTreatment.medications!.map(
      (medication: any) => {
        if (medication.id === medicineId) {
          return {
            ...medication,
            quantity: Math.max(medication.quantity - 1, 0),
          };
        }
        return medication;
      }
    );

    const newTreatment = {
      ...currentTreatment,
      medications: newMedications,
    };
    this.updateTreatment(newTreatment);
  }

  public getTreatment(): Observable<any> {
    return this.data;
  }

  public saveTreatment() {
    const treatment = this.treatment.getValue();
    const { headerPost } = getCookieHeader();

    const data = {
      patient_id: treatment.patient_id,
      observation: treatment.observation,
      medications: treatment.medications!.map((med) => {
        return {
          medication_id: med.id,
          quantity: med.quantity,
        };
      }),
    };

    return this.http.post(`${this.apiURL}/create`, data, {
      headers: headerPost,
    });
  }
}
