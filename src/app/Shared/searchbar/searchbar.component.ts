import { Component } from '@angular/core';
import { InputIconModule } from 'primeng/inputicon';
import { IconFieldModule } from 'primeng/iconfield';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { BtnComponent } from "../btn/btn.component";

@Component({
  selector: 'app-searchbar',
  standalone: true,
  imports: [InputIconModule, IconFieldModule, InputTextModule, FormsModule, BtnComponent],
  templateUrl: './searchbar.component.html',
  styleUrl: './searchbar.component.css'
})
export class SearchbarComponent {

}
