import { Component, OnInit } from '@angular/core';
import { BtnComponent } from "../../../Shared/btn/btn.component";
import { TableComponent } from "../../../Shared/table/table.component";
import { Table2Component } from "../../../Shared/table2/table2.component";
import { H1Component } from '../../../Shared/h1/h1.component';
import { SearchbarComponent } from "../../../Shared/searchbar/searchbar.component";
import { Header } from 'primeng/api';
import { CommonModule } from '@angular/common';
import { NgForOf } from '@angular/common';
import { NgZone } from '@angular/core';


@Component({
  selector: 'app-gestion-comunidad',
  standalone: true,
  imports: [H1Component, BtnComponent, TableComponent, Table2Component, SearchbarComponent, NgForOf], // <--- Add NgForOf
  templateUrl: './gestion-comunidad.component.html',
  styleUrl: './gestion-comunidad.component.css'

})
export default class GestionComunidadComponent implements OnInit {

  constructor(private ngZone: NgZone) { }

  deleteComunidad($event: any) {
    throw new Error('Method not implemented.');
  }
  editComunidad($event: any) {
    throw new Error('Method not implemented.');
  }
  comunidades: any[] = [];
  items: any;

  ngOnInit(): void {
    console.log('asdf');
    this.getPost();
  }
  getPost() {
    fetch('http://localhost:3000/api/community/getAll')
      .then((response) => response.json())
      .then((json) => {
        this.ngZone.run(() => {
          this.comunidades = json.data.Community;
        });
        console.log(json);
      });
  }
}

