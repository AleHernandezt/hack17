import { Component } from '@angular/core';
import { Side2Component } from "../../../Shared/side2/side2.component";
import { H1Component } from '../../../Shared/h1/h1.component';
import { H2Component } from "../../../Shared/h2/h2.component";


@Component({
  selector: 'app-dash-admin',
  standalone: true,
  imports: [Side2Component, H1Component, H2Component],
  templateUrl: './dash-admin.component.html',
  styleUrl: './dash-admin.component.css'
})
export default class DashAdminComponent {

}
