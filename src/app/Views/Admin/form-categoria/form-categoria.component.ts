import { Component, OnInit } from '@angular/core';
import { H1Component } from '../../../Shared/h1/h1.component';
import { CardComponent } from "../../../Shared/card/card.component";
import { NgZone } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-form-categoria',
  standalone: true,
  imports: [H1Component, CardComponent, FormsModule],
  templateUrl: './form-categoria.component.html',
  styleUrls: ['./form-categoria.component.css']
})
export default class FormCategoriaComponent implements OnInit {

  form: any = {
    name: '',
    description: ''
  };

  constructor(private ngZone: NgZone) { }

  ngOnInit(): void {
  }

  createCategory() {
    fetch('http://localhost:3000/api/category/create', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(this.form)
    })
      .then((response) => response.json())
      .then((json) => {
        console.log(json); // <--- Agrega esta línea para imprimir los datos en la consola
        this.ngZone.run(() => {
          console.log('Categoría creada con éxito');
          this.form = {
            name: '',
            description: ''
          };
        });
      })
      .catch((error) => {
        console.error(error); // <--- Agrega esta línea para imprimir el error en la consola
        this.ngZone.run(() => {
          console.log('Error al crear la categoría');
          
        });
      });
  }
}