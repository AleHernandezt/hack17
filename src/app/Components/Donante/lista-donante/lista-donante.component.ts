import { Component, EventEmitter, Output } from '@angular/core';
import { SearchBarInputComponent } from "../../../Shared/search-bar-input/search-bar-input.component";
import { CardDonanteComponent } from "../card-donante/card-donante.component";
import { CharityInterface } from '../../../Core/Interfaces/charity.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-lista-donante',
  standalone: true,
  imports: [SearchBarInputComponent, CardDonanteComponent, CommonModule],
  templateUrl: './lista-donante.component.html',
  styleUrl: './lista-donante.component.css'
})
export class ListaDonanteComponent {

    charities: CharityInterface[] = [
    {
      id: 1,
      razon_social: "Fundación Esperanza",
      description: "Apoyo a niños en situación de calle.",
      status: "active",
      identification: "J-12345678-9",
      indentification_type: "J",
      is_fundation: true,
    },
    {
      id: 2,
      razon_social: "Asociación Vida",
      description: "Protección de animales abandonados.",
      status: "active",
      identification: "V-98765432-1",
      indentification_type: "V",
      is_fundation: false,
    },
    {
      id: 3,
      razon_social: "Fundación Salud",
      description: "Mejoras en la salud de comunidades vulnerables.",
      status: "inactive",
      identification: "E-12345678-0",
      indentification_type: "E",
      is_fundation: true,
    },
    {
      id: 4,
      razon_social: "Asociación de Educación",
      description: "Programas de educación para adultos.",
      status: "active",
      identification: "G-65432109-8",
      indentification_type: "G",
      is_fundation: false,
    },
    {
      id: 5,
      razon_social: "Fundación Mujeres",
      description: "Empoderamiento de mujeres en situación de vulnerabilidad.",
      status: "active",
      identification: "P-34567890-7",
      indentification_type: "P",
      is_fundation: true,
    },
    {
      id: 6,
      razon_social: "Fundación Medio Ambiente",
      description: "Conservación de recursos naturales.",
      status: "active",
      identification: "M-87654321-6",
      indentification_type: "M",
      is_fundation: true,
    },
    {
      id: 7,
      razon_social: "Asociación Cultural",
      description: "Promoción de la cultura local.",
      status: "deleted",
      identification: "J-13579246-5",
      indentification_type: "J",
      is_fundation: false,
    },
    {
      id: 8,
      razon_social: "Fundación Deportes",
      description: "Fomento del deporte en jóvenes.",
      status: "active",
      identification: "V-24681357-4",
      indentification_type: "V",
      is_fundation: true,
    },
    {
      id: 9,
      razon_social: "Asociación de Salud Mental",
      description: "Ayuda a personas con trastornos mentales.",
      status: "active",
      identification: "E-12312312-3",
      indentification_type: "E",
      is_fundation: false,
    },
    {
      id: 10,
      razon_social: "Fundación Tecnología",
      description: "Acceso a tecnología para comunidades rurales.",
      status: "inactive",
      identification: "G-32132132-2",
      indentification_type: "G",
      is_fundation: true,
    },
    {
      id: 11,
      razon_social: "Asociación de Voluntarios",
      description: "Organización de campañas de voluntariado.",
      status: "active",
      identification: "P-45645645-1",
      indentification_type: "P",
      is_fundation: false,
    },
    {
      id: 12,
      razon_social: "Fundación Derechos Humanos",
      description: "Defensa de los derechos humanos.",
      status: "active",
      identification: "M-65465465-0",
      indentification_type: "M",
      is_fundation: true,
    },
    {
      id: 13,
      razon_social: "Asociación de Innovación Social",
      description: "Proyectos innovadores para el bienestar social.",
      status: "active",
      identification: "J-78978978-9",
      indentification_type: "J",
      is_fundation: false,
    },
  ];

  filteredCharities : any = []


  @Output() donanteSeleccionado = new EventEmitter<CharityInterface>();

  seleccionarDonante(charity: CharityInterface) {
    this.donanteSeleccionado.emit(charity);
  }

  realizarBusqueda(busqueda: string) {
    this.filteredCharities = this.charities.filter(charity =>
      charity.identification.toLowerCase().includes(busqueda.toLowerCase())
    );
  }

  limpiarBusqueda() {
    this.filteredCharities = [];
  }



}
