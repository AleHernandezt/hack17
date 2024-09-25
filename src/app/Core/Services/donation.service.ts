import { BehaviorSubject, Observable } from 'rxjs';
import { DonationInterface } from '../Interfaces/donation.interface';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class DonationService {
  public donation: BehaviorSubject<DonationInterface> = new BehaviorSubject<DonationInterface>({
    description: "",
    category_id: 0,
    name: "",
    charity_id: 0,
    charityName: "",
    medications: [

    ],
  });

  private data: Observable<DonationInterface> = this.donation.asObservable();

  constructor() {}

  public updateDonation(newDonation: DonationInterface): void {
    this.donation.next(newDonation);
  }

  public updateCharity(id: number, name: string): void {  // Reintroducido charityName
    const currentDonation = this.donation.getValue();

    const newDonation: DonationInterface = {
      ...currentDonation,
      charity_id: id,
      charityName: name,  // Agregado
    };

    this.updateDonation(newDonation);
  }

  public addMedication(id: number, name: string, quantity: number): void {
    const currentDonation = this.donation.getValue();

    const existingMedicationIndex = currentDonation.medications?.findIndex((med) => med.id === id);

    let newMedications;

    if (existingMedicationIndex !== -1) {
      const existingMedication = currentDonation.medications![existingMedicationIndex!];
      existingMedication.quantity += quantity;

      newMedications = [
        ...currentDonation.medications!.slice(0, existingMedicationIndex),
        existingMedication,
        ...currentDonation.medications!.slice(existingMedicationIndex! + 1),
      ];
    } else {
      newMedications = [...currentDonation.medications!, { id: id, name: name, quantity}];
    }

    const newDonation: DonationInterface = {
      ...currentDonation,
      medications: newMedications,
    };

    this.updateDonation(newDonation);
  }

  public removeMedication(medicineId: number): void {
    const currentDonation = this.donation.getValue();
    const newMedications = currentDonation.medications!.filter((med) => med.id !== medicineId);

    const newDonation: DonationInterface = {
      ...currentDonation,
      medications: newMedications,
    };

    this.updateDonation(newDonation);
  }

  public increaseMedicationQuantity(medicineId: number): void {
    const currentDonation = this.donation.getValue();
    const newMedications = currentDonation.medications!.map((medication) => {
      if (medication.id === medicineId) {
        return { ...medication, quantity: medication.quantity + 1 };
      }
      return medication;
    });

    const newDonation: DonationInterface = {
      ...currentDonation,
      medications: newMedications,
    };

    this.updateDonation(newDonation);
  }

  public decreaseMedicationQuantity(medicineId: number): void {
    const currentDonation = this.donation.getValue();

    const newMedications = currentDonation.medications!.map((medication) => {
      if (medication.id === medicineId) {
        return { ...medication, quantity: Math.max(medication.quantity - 1, 0) };
      }
      return medication;
    });

    const newDonation: DonationInterface = {
      ...currentDonation,
      medications: newMedications,
    };

    this.updateDonation(newDonation);
  }

  public updateMedicationExpireDate(medicineId: number, newExpireDate: Date): void {
    const currentDonation = this.donation.getValue();

    const newMedications = currentDonation.medications!.map((medication) => {
      if (medication.id === medicineId) {
        return { ...medication, expireDate: newExpireDate }; // Actualiza la fecha de vencimiento
      }
      return medication;
    });

    const newDonation: DonationInterface = {
      ...currentDonation,
      medications: newMedications,
    };

    this.updateDonation(newDonation);
  }

  public getDonation(): Observable<DonationInterface> {
    return this.data;
  }

  public saveDonation() {
    // Código para guardar la donación en la base de datos
  }
}
