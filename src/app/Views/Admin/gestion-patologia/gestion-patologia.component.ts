import { Component, OnInit } from '@angular/core';
import { H1Component } from "../../../Shared/h1/h1.component";
import { BtnComponent } from "../../../Shared/btn/btn.component";
import { SearchbarComponent } from "../../../Shared/searchbar/searchbar.component";
import { Table2Component } from "../../../Shared/table2/table2.component";
import { NgZone } from '@angular/core';

@Component({
  selector: 'app-gestion-patologia',
  standalone: true,
  imports: [H1Component, BtnComponent, SearchbarComponent, Table2Component],
  templateUrl: './gestion-patologia.component.html',
  styleUrl: './gestion-patologia.component.css'
})
export default class GestionPatologiaComponent implements OnInit {
  patologias: any[] = [];

  constructor(private ngZone: NgZone) { }

  ngOnInit(): void {
    this.getPatologias();
  }

  getPatologias() {
    fetch('http://localhost:3000/api/pathology/getAll')
      .then((response) => response.json())
      .then((json) => {
        console.log(json); // <--- Agrega esta línea para imprimir los datos en la consola
        if (json && json.data && json.data.pathologies && Array.isArray(json.data.pathologies)) {
          this.ngZone.run(() => {
            this.patologias = json.data.pathologies.slice(0, 10);
          });
        } else {
          console.error('La API no devolvió un arreglo de patologías');
        }
      });
  }

  editPatologia(patologia: any) {
    alert(patologia);
  }

  deletePatologia(patologia: any) {
    alert(patologia);
  }
}