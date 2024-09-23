import { Component, OnInit } from '@angular/core';
import { ResumenTratamientoComponent } from "../../../Components/Tratamientos/resumen-tratamiento/resumen-tratamiento.component";
import { ListaPacientesComponent } from "../../../Components/Paciente/lista-pacientes/lista-pacientes.component";
import { TreatmentService } from '../../../Core/Services/treatment.service';
import { ListaMedicinasComponent } from "../../../Components/Medicinas/lista-medicinas/lista-medicinas.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-form-tratamiento',
  standalone: true,
  imports: [ResumenTratamientoComponent, ListaPacientesComponent, ListaMedicinasComponent, CommonModule],
  templateUrl: './form-tratamiento.component.html',
  styleUrls: ['./form-tratamiento.component.css']
})
export default class FormTratamientoComponent implements OnInit {

  treatment: any = {};

  constructor(private treatmentService: TreatmentService) {}

  ngOnInit() {
    this.treatmentService.getTreatment().subscribe(data => {
      this.treatment = data;
    });

    console.log(this.treatment)
  }

  onPacienteSeleccionado(paciente: { nombre: string; cedula: string }) {
    this.treatmentService.updatePatient(paciente.cedula, paciente.nombre)
  }

}
