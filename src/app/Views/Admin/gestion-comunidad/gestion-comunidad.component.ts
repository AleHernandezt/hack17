import { Component, OnInit } from '@angular/core';
import { BtnComponent } from "../../../Shared/btn/btn.component";
import { TableComponent } from "../../../Shared/table/table.component";
import { Table2Component } from "../../../Shared/table2/table2.component";
import { H1Component } from '../../../Shared/h1/h1.component';
import { SearchbarComponent } from "../../../Shared/searchbar/searchbar.component";
import { Header } from 'primeng/api';

@Component({
  selector: 'app-gestion-comunidad',
  standalone: true,
  imports: [H1Component, BtnComponent, TableComponent, Table2Component, SearchbarComponent],
  templateUrl: './gestion-comunidad.component.html',
  styleUrl: './gestion-comunidad.component.css'
})
export default class GestionComunidadComponent implements OnInit {
  ngOnInit(): void {
    console.log('asdf');
    this.getPost();
    // this.createPost();
  }
  getPost() {
    fetch('http://localhost:3000/api/community/getAll')
      .then((response) => response.json())
      .then((json) => console.log(json))
  }

  // createPost() {
  //   fetch('http://localhost:3000/api/community/create', {
  //     method: "POST",
  //     body: JSON.stringify({
  //       "name": "pedregal",
  //       "region": "comprende la zona geográfica de..."
  //     }),
  //     headers: {
  //       'Content-Type': 'application/json; charset=UTF-8'
  //     }
  //   })
  //   .then((response) => {
  //     if (!response.ok) {
  //       throw new Error(`HTTP error! status: ${response.status}`);
  //     }
  //     return response.json();
  //   })
  //   .then((json) => console.log(json))
  //   .catch((error) => console.error('Error creating post:', error));
  // }



  // comunidades = [
  //   {
  //     id: 1,
  //     nombre: 'Comunidad 1',
  //     region: 'Calle 1, número 2, 28001 Madrid'
  //   },
  //   {
  //     id: 2,
  //     nombre: 'Comunidad 2',
  //     region: 'Avenida 3, número 4, 28002 Madrid'
  //   },
  //   {
  //     id: 3,
  //     nombre: 'Comunidad 3',
  //     region: 'Calle 5, número 6, 28003 Madrid'
  //   }
  // ];

  // editComunidad(comunidad: any) {
  //   alert(comunidad.nombre);
  // }

  // deleteComunidad(comunidad: any) {
  //   alert(comunidad.id);
  // }
}
