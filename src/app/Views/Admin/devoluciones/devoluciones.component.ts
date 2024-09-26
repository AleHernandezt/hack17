import { Component, OnInit } from '@angular/core';
import { H1Component } from "../../../Shared/h1/h1.component";
import { BtnComponent } from "../../../Shared/btn/btn.component";
import { SearchbarComponent } from "../../../Shared/searchbar/searchbar.component";
import { Table2Component } from "../../../Shared/table2/table2.component";
import { NgZone } from '@angular/core';

@Component({
  selector: 'app-devoluciones',
  standalone: true,
  imports: [H1Component, BtnComponent, SearchbarComponent, Table2Component],
  templateUrl: './devoluciones.component.html',
  styleUrl: './devoluciones.component.css'
})
export default class DevolucionesComponent implements OnInit {
  devoluciones: any[] = [];

  constructor(private ngZone: NgZone) { }

  ngOnInit(): void {
    this.getDevoluciones();
  }

  getDevoluciones() {
    fetch('http://localhost:3000/api/delivery/getDeleted')
      .then((response) => response.json())
      .then((json) => {
        console.log(json); // <--- Agrega esta línea para imprimir los datos en la consola
        if (json && json.data && json.data.Delivery && Array.isArray(json.data.Delivery)) {
          this.ngZone.run(() => {
            this.devoluciones = json.data.Delivery;
          });
        } else {
          console.error('La API no devolvió un arreglo de devoluciones');
        }
      });
  }

  editDevolucion(devolucion: any) {
    alert(devolucion.patient_id);
  }

  deleteDevolucion(devolucion: any) {
    alert(devolucion.patient_id);
  }
}