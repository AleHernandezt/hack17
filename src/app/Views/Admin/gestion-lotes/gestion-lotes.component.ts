import { Component, OnInit, NgZone } from '@angular/core';
import { H1Component } from "../../../Shared/h1/h1.component";
import { Table2Component } from "../../../Shared/table2/table2.component";
import { SearchbarComponent } from "../../../Shared/searchbar/searchbar.component";
import { BtnComponent } from "../../../Shared/btn/btn.component";

@Component({
  selector: 'app-gestion-lotes',
  standalone: true,
  imports: [H1Component, Table2Component, SearchbarComponent, BtnComponent],
  templateUrl: './gestion-lotes.component.html',
  styleUrls: ['./gestion-lotes.component.css']
})
export default class GestionLotesComponent implements OnInit {

  lotes: any[] = [];

  constructor(private ngZone: NgZone) { }

  ngOnInit(): void {
    this.getLotes();
  }

  getLotes() {
    fetch('http://localhost:3000/api/medication_expiration/getAll')
      .then((response) => response.json())
      .then((json) => {
        console.log(json); // <--- Agrega esta línea para imprimir los datos en la consola
        this.ngZone.run(() => {
          this.lotes = json.slice(-10); // <--- Muestra los últimos 10 lotes de medicamentos
        });
      });
  }
}