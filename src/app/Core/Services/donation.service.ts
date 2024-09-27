import { BehaviorSubject, Observable } from 'rxjs';
import { PostDonationInterface } from '../Interfaces/donation.interface';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class DonationService {
  public donation: BehaviorSubject<PostDonationInterface> = new BehaviorSubject<PostDonationInterface>({
    description: "",
    category_id: 0,
    category_name: "",
    charity_id: 0,
    charity_name: "",
    medications: [

    ],
  });

  private data: Observable<PostDonationInterface> = this.donation.asObservable();

  constructor() {}

  public updateDonation(newDonation: PostDonationInterface): void {
    this.donation.next(newDonation);
  }

  public updateCharity(id: number, name: string): void {
    const currentDonation = this.donation.getValue();

    const newDonation: PostDonationInterface = {
      ...currentDonation,
      charity_id: id,
      charity_name: name,
    };

    this.updateDonation(newDonation);
  }

  public addMedication(id: number, name: string, quantity: number): void {
    const currentDonation = this.donation.getValue();

    const existingMedicationIndex = currentDonation.medications?.findIndex((med) => med.medication_id === id);

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
      newMedications = [
        ...currentDonation.medications!,
        { medication_id: id, name: name, quantity}
      ];
    }

    const newDonation: PostDonationInterface = {
      ...currentDonation,
      medications: newMedications,
    };

    this.updateDonation(newDonation);
  }

  public removeMedication(medicineId: number): void {
    const currentDonation = this.donation.getValue();
    const newMedications = currentDonation.medications!.filter((med) => med.medication_id !== medicineId);

    const newDonation: PostDonationInterface = {
      ...currentDonation,
      medications: newMedications,
    };

    this.updateDonation(newDonation);
  }

  public increaseMedicationQuantity(medicineId: number): void {
    const currentDonation = this.donation.getValue();
    const newMedications = currentDonation.medications!.map((medication) => {
      if (medication.medication_id === medicineId) {
        return { ...medication, quantity: medication.quantity + 1 };
      }
      return medication;
    });

    const newDonation: PostDonationInterface = {
      ...currentDonation,
      medications: newMedications,
    };

    this.updateDonation(newDonation);
  }

  public decreaseMedicationQuantity(medicineId: number): void {
    const currentDonation = this.donation.getValue();

    const newMedications = currentDonation.medications!.map((medication) => {
      if (medication.medication_id === medicineId) {
        return { ...medication, quantity: Math.max(medication.quantity - 1, 0) };
      }
      return medication;
    });

    const newDonation: PostDonationInterface = {
      ...currentDonation,
      medications: newMedications,
    };

    this.updateDonation(newDonation);
  }

  public updateMedicationExpireDate(medicineId: number, newExpireDate: string): void {
    const currentDonation = this.donation.getValue();


    const newMedications = currentDonation.medications!.map((medication) => {
      if (+medication.medication_id === medicineId) {
        return { ...medication, expiration_date: newExpireDate };
      }
      return medication;
    });

    const newDonation: PostDonationInterface = {
      ...currentDonation,
      medications: newMedications,
    };

    this.updateDonation(newDonation);
    console.log(this.donation.getValue())
  }

  public getDonation(): Observable<PostDonationInterface> {
    return this.data;
  }

  public saveDonation() {
    // Código para guardar la donación en la base de datos
  }
}
