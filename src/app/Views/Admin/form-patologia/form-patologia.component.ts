// import { Component } from '@angular/core';
// import { H1Component } from '../../../Shared/h1/h1.component';
// import { FormsModule } from '@angular/forms';
// import { NgZone } from '@angular/core';

// @Component({
//   selector: 'app-form-patologia',
//   standalone: true,
//   imports: [H1Component, FormsModule],
//   templateUrl: './form-patologia.component.html',
//   styleUrls: ['./form-patologia.component.css']
// })
// export default class FormPatologiaComponent {
//   id = 400;
//   patologia = {
//     name: ''
//   };

//   constructor(private ngZone: NgZone) { }

//   createPatologia() {
//     fetch('http://localhost:3000/api/pathology/create', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify({
//         id: this.id,
//         name: this.patologia.name
//       })
//     })
//       .then((response) => response.json())
//       .then((json) => {
//         console.log(json); // Log the response from the API
//         if (json.message === 'Contact the administrator: error') {
//           console.log('Error al crear la patología');
//         } else {
//           console.log('Patología creada con éxito');
//           this.patologia = {
//             name: ''
//           };
//           this.id++;
//         }
//       })
//       .catch((error) => {
//         console.error(error); // Log the error
//         console.log('Error al crear la patología');
//       });
//   }
// }

import { Component } from '@angular/core';
import { H1Component } from '../../../Shared/h1/h1.component';
import { FormsModule } from '@angular/forms';
import { NgZone } from '@angular/core';

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

  constructor(private ngZone: NgZone) { }

  createPatologia() {
    fetch('http://localhost:3000/api/pathology/create', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(this.patologia)
    })
      .then((response) => response.json())
      .then((json) => {
        console.log(json); // Log the response from the API
        if (json.message === 'Contact the administrator: error') {
          console.log('Error al crear la patología');
        } else {
          console.log('Patología creada con éxito');
          this.patologia = {
            name: ''
          };
        }
      })
      .catch((error) => {
        console.error(error); // Log the error
        console.log('Error al crear la patología');
      });
  }
}
