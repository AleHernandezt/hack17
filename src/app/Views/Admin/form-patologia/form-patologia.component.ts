import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { H1Component } from "../../../Shared/h1/h1.component";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-form-patologia',
  standalone: true,
  imports: [H1Component, FormsModule],
  templateUrl: './form-patologia.component.html',
  styleUrls: ['./form-patologia.component.css']
})
export default class FormPatologiaComponent {
  patologia = {
    name: ''
  };

  constructor(private http: HttpClient) { }

  createPatologia(): void {
    this.http.post('http://localhost:3000/api/pathology/create', this.patologia)
      .subscribe(response => {
        console.log(response);
        alert('Patología creada con éxito');
      }, error => {
        console.error(error);
        alert('Error al crear la patología');
      });
  }
}