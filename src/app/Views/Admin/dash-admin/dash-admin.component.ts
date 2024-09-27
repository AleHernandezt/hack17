import { Component, OnInit } from '@angular/core';
import { Side2Component } from "../../../Shared/side2/side2.component";
import { H1Component } from '../../../Shared/h1/h1.component';
import { H2Component } from "../../../Shared/h2/h2.component";

import { getUserInfoFromToken } from '../../../custom/getJwtInfo';
import { Chart, registerables } from 'chart.js';
import { HttpClient } from '@angular/common/http';
import { mostDonatedInterface } from '../../../Core/Interfaces/mostDonatedMedicines.interface';
import { mostRequiredByCommunityInterface, mostRequiredInterface } from '../../../Core/Interfaces/mostRequiredMedicines.interface';
import { pathologiesPerPatient } from '../../../Core/Interfaces/pathologiesPerPatient.interface';

Chart.register(...registerables);

@Component({
  selector: 'app-dash-admin',
  standalone: true,
  imports: [Side2Component, H1Component, H2Component],
  templateUrl: './dash-admin.component.html',
  styleUrls: ['./dash-admin.component.css']
})
export default class DashAdminComponent implements OnInit {
  public name: string = '';
  public mostDonatedMedicines: mostDonatedInterface | null = null;
  public mostRequiredMedicines: mostRequiredInterface | null = null;
  public mostRequiredPerCommunity: mostRequiredByCommunityInterface | null = null;
  public pathologiesPerPatient: pathologiesPerPatient | null = null;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    const { name } = getUserInfoFromToken();
    this.name = name;
    this.loadData();
  }

  loadData() {
    this.http.get<mostDonatedInterface>('http://localhost:3000/api/medication/getMostDonated/')
      .subscribe(Response => {

        this.mostDonatedMedicines = Response ;

        this.renderMostDonatedChart();
      });

    this.http.get<mostRequiredInterface>('http://localhost:3000/api/medication/getMostRequired/')
      .subscribe(data => {
        this.mostRequiredMedicines = data;
        this.renderMostRequiredChart();
      });

    this.http.get<mostRequiredByCommunityInterface>('http://localhost:3000/api/medication/getMostRequeriedByCommunity')
      .subscribe(data => {
        this.mostRequiredPerCommunity = data;
      });

    this.http.get<pathologiesPerPatient>('http://localhost:3000/api/pathology/getPatientCount')
      .subscribe(data => {
        this.pathologiesPerPatient = data;
      });
  }

  renderMostDonatedChart() {
    if (this.mostDonatedMedicines) {
      const firstFiveMedicines = this.mostDonatedMedicines.data.Medication.slice(0, 5);

      const labels = firstFiveMedicines.map(med => med.medication_name);
      const data = firstFiveMedicines.map(med => parseInt(med.donation_count));

      new Chart('Chart1', {
        type: 'doughnut',
        data: {
          labels: labels,
          datasets: [
            {
              data: data,
              backgroundColor: this.getColors(labels.length)
            }
          ]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
        }
      });
    }
  }

  renderMostRequiredChart() {
    if (this.mostRequiredMedicines) {
      const firstFiveMedicines = this.mostRequiredMedicines.data.Medication_Treatment.slice(0, 5);
      const labels = firstFiveMedicines.map(med => med.medication_name);
      const data = firstFiveMedicines.map(med => med.usage_count);

      new Chart('Chart2', {
        type: 'doughnut',
        data: {
          labels: labels,
          datasets: [
            {
              data: data,
              backgroundColor: this.getColors(labels.length)
            }
          ]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
        }
      });
    }
  }

  getColors(numColors: number): string[] {
    const colors = [];
    for (let i = 0; i < numColors; i++) {
      colors.push(`hsl(${(i * 360) / numColors}, 70%, 50%)`);
    }
    return colors;
  }
}
