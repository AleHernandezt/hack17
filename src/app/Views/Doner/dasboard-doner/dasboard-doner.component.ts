import { Component } from '@angular/core';
import { BtnComponent } from "../../../Shared/btn/btn.component";
import { H1Component } from "../../../Shared/h1/h1.component";

@Component({
  selector: 'app-dasboard-doner',
  standalone: true,
  imports: [BtnComponent, H1Component],
  templateUrl: './dasboard-doner.component.html',
  styleUrl: './dasboard-doner.component.css'
})
export default class DasboardDonerComponent {

}
