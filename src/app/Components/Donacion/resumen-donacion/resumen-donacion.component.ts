import { Component } from '@angular/core';
import { DonationService } from '../../../Core/Services/donation.service';
import { ResumenTratamientoComponent } from '../../Tratamientos/resumen-tratamiento/resumen-tratamiento.component';
import { ResumenMedicinaComponent } from '../../Medicinas/resumen-medicina/resumen-medicina.component';
import { ResumenPacienteComponent } from '../../Paciente/resumen-paciente/resumen-paciente.component';
import { CommonModule } from '@angular/common';
import { ResumenDonanteComponent } from '../../Donante/resumen-donante/resumen-donante.component';
import { PostDonationInterface } from '../../../Core/Interfaces/donation.interface';
import { Subscription } from 'rxjs';
import { CardMedicamentoWithDateComponent } from '../../Medicinas/card-medicamento-with-date/card-medicamento-with-date.component';
import { ToastrService } from 'ngx-toastr';
import { CategoryInterface } from '../../../Core/Interfaces/category.interface';
import { HttpClient } from '@angular/common/http';
import { appSettings } from '../../../settings/appsettings';
import { getCookieHeader } from '../../../custom/getCookieHeader';

@Component({
  selector: 'app-resumen-donacion',
  standalone: true,
  imports: [
    ResumenTratamientoComponent,
    ResumenMedicinaComponent,
    ResumenPacienteComponent,
    CommonModule,
    ResumenDonanteComponent,
    CardMedicamentoWithDateComponent,
  ],
  templateUrl: './resumen-donacion.component.html',
  styleUrls: ['./resumen-donacion.component.css'],
})
export class ResumenDonacionComponent {
  donation: PostDonationInterface | null = null;
  private donationSubscription: Subscription | null = null;
  categories: CategoryInterface[] = [];

  constructor(
    private donationService: DonationService,
    private notificationService: ToastrService,
    private http: HttpClient
  ) {}

  ngOnInit() {
    this.donationSubscription = this.donationService
      .getDonation()
      .subscribe((data) => {
        this.donation = data;
      });
    this.loadCategories();
  }
  loadCategories() {
    const { headers } = getCookieHeader();
    this.http
      .get<{ data: { Category: CategoryInterface[] } }>(
        `${appSettings.apiUrl}category/getAllActive`,
        { headers }
      )
      .subscribe(
        (response) => {
          console.log(response);
          this.categories = response.data.Category;
        },
        (error) => {
          console.error('Error al cargar las categorías:', error);
        }
      );
  }

  ngOnDestroy() {
    if (this.donationSubscription) {
      this.donationSubscription.unsubscribe();
    }
  }

  onMedicineDeleted(medicineId: number) {
    // Eliminación de medicina
    this.notificationService.warning('Eliminado', 'Alerta');
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

  onDateChanged(medicineId: number, newDate: string) {
    this.donationService.updateMedicationExpireDate(medicineId, newDate);
  }

  onCategorySelected(event: Event) {
    const selectElement = event.target as HTMLSelectElement;
    const selectedCategoryId = selectElement.value;

    this.donationService.updateCategory(+selectedCategoryId);
  }

  onDesacriptionChange(event: Event) {
    const target = event.target as HTMLInputElement;
    if (target && target.value) {
      this.donationService.updateDescription(target.value);
    }
  }

  deleteCharity() {
    const id = 0;
    const name = '';
    this.donationService.updateCharity(id, name);
  }

  saveDonation(): void {
    this.donationService.saveDonation().subscribe(
      (response) => {
        console.log('Donation saved successfully:', response);
      },
      (error) => {
        console.error('Error saving donation:', error);
      }
    );
  }
}
