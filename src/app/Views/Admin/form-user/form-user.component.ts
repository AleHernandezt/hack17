import { Component, NgZone } from '@angular/core';
import { H1Component } from '../../../Shared/h1/h1.component';
import { CardComponent } from '../../../Shared/card/card.component';
import { InputTextComponent } from '../../../Shared/input-text/input-text.component';
import { BtnComponent } from '../../../Shared/btn/btn.component';
import { FormsModule } from '@angular/forms';
import { appSettings } from '../../../settings/appsettings';
import { getCookieHeader } from '../../../custom/getCookieHeader';
import { Admin } from '../../../Core/Interfaces/admin.interface';
import { CommonModule } from '@angular/common';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-form-usuario',
  standalone: true,
  imports: [
    CommonModule,
    H1Component,
    CardComponent,
    InputTextComponent,
    BtnComponent,
    FormsModule,
  ],
  templateUrl: './form-user.component.html',
  styleUrls: ['./form-user.component.css'],
})
export default class FormUserComponent {
  form: Admin = {
    first_name: '',
    last_name: '',
    email: '',
    id_card_prefix: '',
    id_card: '',
    password: '',
    confirm_password: '',
    userType: 'donor',
    razon_social: '',
    description: '',
    is_fundation: false,
  };

  selectUserType(type: 'admin' | 'donor') {
    this.form.userType = type;
  }

  constructor(
    private ngZone: NgZone,
    private toastrService : ToastrService
  ) {}

  createUser(): void {
    if (this.form.password !== this.form.confirm_password) {
      alert('Las contraseñas no coinciden');
      return;
    }

    if (
      !this.form.first_name ||
      !this.form.last_name ||
      !this.form.email ||
      !this.form.id_card ||
      !this.form.password ||
      !this.form.confirm_password
    ) {
      this.toastrService.error('Por favor Complete Todos los Campos', 'Error')
      return;
    }

    if (this.form.userType === 'donor') {
      if (!this.form.razon_social || !this.form.description) {
        this.toastrService.error(
          'Por favor, complete todos los campos adicionales para el tipo de usuario "donor"' , 'Error'
        );
        return;
      }
    }

    const user = {
      first_name: this.form.first_name,
      last_name: this.form.last_name,
      email: this.form.email,
      cedula: this.form.id_card_prefix + this.form.id_card,
      password: this.form.password,
      userType: this.form.userType,
      ...(this.form.userType === 'donor' && {
        razon_social: this.form.razon_social,
        description: this.form.description,
        is_fundation: this.form.is_fundation,
      }),
    };

    const { headerPost } = getCookieHeader();
    fetch(`${appSettings.apiUrl}admin/create`, {
      method: 'POST',
      headers: headerPost,
      body: JSON.stringify(user),
    })
      .then((response) => response.json())
      .then((json) => {
        console.log(json); // Log the response from the API
        this.ngZone.run(() => {
          this.toastrService.success('Usuario creado con éxito', 'Exito');
          this.form = {
            first_name: '',
            last_name: '',
            email: '',
            id_card: '',
            id_card_prefix: 'V-',
            password: '',
            confirm_password: '',
            userType: 'admin',
            razon_social: '',
            description: '',
            is_fundation: false,
          };
        });
      })
      .catch((error) => {
        console.error(error); // Log the error
        this.ngZone.run(() => {
          this.toastrService.success('Error al crear el usuario', 'Error');
        });
      });
  }
}
