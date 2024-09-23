import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TreatmentService {
  public treatment: BehaviorSubject<any> = new BehaviorSubject<any>({
    patientId: 'test-patient-id',
    patientName: 'John Doe',
    medications: [
      { id: 'med1', name: 'Aspirin', quantity: 2 },
      { id: 'med2', name: 'Ibuprofen', quantity: 1 }
    ]
  });

  private data: Observable<any> = this.treatment.asObservable();

  constructor() {}

  public updateTreatment(newTreatment: any): void {
    this.treatment.next(newTreatment);
  }

  public updatePatient(id: string, name: string): void {
    const newTreatment = {
      ...this.treatment.getValue(),
      patientId: id,
      patientName: name
    };
    this.updateTreatment(newTreatment);
  }

  public addMedication(id: string, name: string, quantity: number): void {
    const currentTreatment = this.treatment.getValue();
    const newMedications = [...currentTreatment.medications, { id, name, quantity }];

    const newTreatment = {
      ...currentTreatment,
      medications: newMedications
    };

    this.updateTreatment(newTreatment);
  }

  public removeMedication(medicineId: string): void {
    const currentTreatment = this.treatment.getValue();
    const newMedications = currentTreatment.medications.filter(( med : any) => med.id !== medicineId);

    const newTreatment = {
      ...currentTreatment,
      medications: newMedications
    };

    this.updateTreatment(newTreatment);
  }

  public increaseMedicationQuantity(medicineId: string): void {
    const currentTreatment = this.treatment.getValue();
    const newMedications = currentTreatment.medications.map((medication : any) => {
      if (medication.id === medicineId) {
        return { ...medication, quantity: medication.quantity + 1 };
      }
      return medication;
    });

    const newTreatment = {
      ...currentTreatment,
      medications: newMedications
    };

    this.updateTreatment(newTreatment);
  }

  public decreaseMedicationQuantity(medicineId: string): void {
    const currentTreatment = this.treatment.getValue();

    const newMedications = currentTreatment.medications.map((medication: any) => {
        if (medication.id === medicineId) {
            return { ...medication, quantity: Math.max(medication.quantity - 1, 0) };
        }
        return medication;
    });

    const newTreatment = {
        ...currentTreatment,
        medications: newMedications
    };
    this.updateTreatment(newTreatment);
}

  public getTreatment(): Observable<any> {
    return this.data;
  }

  public saveTreatment() {
    // Código para guardar tratamiento en la DB
  }
}
