import { Component } from '@angular/core';
import { Side2Component } from "../../../Shared/side2/side2.component";
import { H1Component } from '../../../Shared/h1/h1.component';

@Component({
  selector: 'app-dash-admin',
  standalone: true,
  imports: [Side2Component, H1Component],
  templateUrl: './dash-admin.component.html',
  styleUrl: './dash-admin.component.css'
})
export default class DashAdminComponent {

}
