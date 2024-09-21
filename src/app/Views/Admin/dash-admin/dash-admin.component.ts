import { Component } from '@angular/core';
import { SidebarComponent } from "../../../Shared/sidebar/sidebar.component";
import { Side2Component } from "../../../Shared/side2/side2.component";

@Component({
  selector: 'app-dash-admin',
  standalone: true,
  imports: [SidebarComponent, Side2Component],
  templateUrl: './dash-admin.component.html',
  styleUrl: './dash-admin.component.css'
})
export default class DashAdminComponent {

}
