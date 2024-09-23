import { Component } from '@angular/core';
import { CardComponent } from '../../Shared/card/card.component';
import { InputPasswordComponent } from '../../Shared/input-password/input-password.component';
import { InputEmailComponent } from "../../Shared/input-email/input-email.component";
import { BtnComponent } from "../../Shared/btn/btn.component";
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CardModule } from 'primeng/card';

import { AuthService } from '../../Core/Services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CardComponent, InputPasswordComponent, InputEmailComponent, BtnComponent, FormsModule, CardModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export default class LoginComponent {
  email: string = '';
  password: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  onSubmit() {
    if (this.email && this.password) {
      this.authService.login(this.email, this.password)
        .then((token: any) => {
          if (token) {
            console.log('Logged in successfully!');
            this.router.navigate(['/dashboardAdmin']);
          } else {
            console.error('Login failed!');
          }
        })
        .catch((error: any) => {
          console.error(error);
        });
    }
  }
}
