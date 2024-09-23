import { Component } from '@angular/core';
import { CardComponent } from '../../Shared/card/card.component';
import { InputPasswordComponent } from '../../Shared/input-password/input-password.component';
import { InputEmailComponent } from "../../Shared/input-email/input-email.component";
import { BtnComponent } from "../../Shared/btn/btn.component";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CardComponent, InputPasswordComponent, InputEmailComponent, BtnComponent],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export default class LoginComponent {

}