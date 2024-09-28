import { Component, OnInit } from '@angular/core';
import { BtnComponent } from '../../../Shared/btn/btn.component';
import { H1Component } from '../../../Shared/h1/h1.component';
import { ReportesService } from '../../../Core/Services/reportes.service';
import { CommonModule } from '@angular/common';
import { CommunityMedications } from '../../../Core/Interfaces/reportes.interface';

@Component({
  selector: 'app-dashboard-doner',
  standalone: true,
  imports: [BtnComponent, H1Component, CommonModule],
  templateUrl: './dasboard-doner.component.html',
  styleUrl: './dasboard-doner.component.css',
})
export default class DasboardDonerComponent implements OnInit {
  // Propiedades para almacenar los datos
  mostRequiredMedications: any[] = [];
  mostRequiredMedicationsCopy: any[] = [];
  mostDonatedMedications: any[] = [];
  mostDonatedMedicationsCopy: any[] = [];
  medicationsByCommunity: CommunityMedications[] = [];
  medicationsByCommunityCopy: CommunityMedications[] = [];

  constructor(private reportesService: ReportesService) {}

  ngOnInit() {
    this.reportesService.getMostRequiredMedications().subscribe(
      (response) => {
        this.mostRequiredMedications = response.data.Medication_Treatment;
        this.mostRequiredMedicationsCopy = this.mostRequiredMedications.slice(
          0,
          15
        );
      },
      (error) => {
        console.error('Error al obtener los datos de comunidad:', error);
      }
    );

    // Obtener los medicamentos más donados
    this.reportesService.getMostDonatedMedications().subscribe(
      (response) => {
        this.mostDonatedMedications = response.data.Medication;
        this.mostDonatedMedicationsCopy = this.mostDonatedMedications.slice(
          0,
          15
        );
      },
      (error) => {
        console.error('Error al obtener los datos de comunidad:', error);
      }
    );

    // Obtener medicamentos requeridos por comunidad
    this.reportesService.getMedicationsByCommunity().subscribe(
      (response) => {
        this.medicationsByCommunity = response.data.Medication;
        this.medicationsByCommunityCopy = this.medicationsByCommunity.slice(
          0,
          3
        );
      },
      (error) => {
        console.error('Error al obtener los datos de comunidad:', error);
      }
    );
  }
}
