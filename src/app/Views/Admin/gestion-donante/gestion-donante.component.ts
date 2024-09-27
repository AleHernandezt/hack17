import { Component, OnInit, NgZone } from '@angular/core';
import { BtnComponent } from "../../../Shared/btn/btn.component";
import { TableComponent } from "../../../Shared/table/table.component";
import { Table2Component } from "../../../Shared/table2/table2.component";
import { H1Component } from '../../../Shared/h1/h1.component';
import { SearchbarComponent } from "../../../Shared/searchbar/searchbar.component";

@Component({
  selector: 'app-gestion-donante',
  standalone: true,
  imports: [H1Component, BtnComponent, TableComponent, Table2Component, SearchbarComponent],
  templateUrl: './gestion-donante.component.html',
  styleUrls: ['./gestion-donante.component.css']
})
export default class GestionDonanteComponent implements OnInit {

  donantes: any[] = [];

  constructor(private ngZone: NgZone) { }

  ngOnInit(): void {
    console.log("holi");
    this.getDonantes();
  }

  getDonantes() {
    fetch('http://localhost:3000/api/charity/getAll')
      .then((response) => response.json())
      .then((json) => {
        console.log(json); // <--- Agrega esta línea para imprimir los datos en la consola
        this.ngZone.run(() => {
          this.donantes = json.data.Charity; // <--- Asigna el arreglo de objetos a la variable
        });
      });
  }

  editDonante(donante: any) {
    alert(donante.razon_social);
  }

  deleteDonante(donante: any) {
    alert(donante.razon_social);
  }
}