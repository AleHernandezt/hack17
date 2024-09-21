import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Side2Component } from "./Shared/side2/side2.component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Side2Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'hack17';
}
