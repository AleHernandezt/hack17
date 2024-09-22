import { Component } from '@angular/core';
import { BtnComponent } from "../../../Shared/btn/btn.component";
import { TableComponent } from "../../../Shared/table/table.component";
import { Table2Component } from "../../../Shared/table2/table2.component";

@Component({
  selector: 'app-gestion-categoria',
  standalone: true,
  imports: [BtnComponent, TableComponent, Table2Component],
  templateUrl: './gestion-categoria.component.html',
  styleUrls: ['./gestion-categoria.component.css']
})
export default class GestionCategoriaComponent {

  categories = [
    {
      id: 1,
      name: 'Electronics',
      createdAt: new Date('2023-01-15'),
      updatedAt: new Date('2023-02-20'),
      description: 'Various electronic items',
      status: 'Active',
      price: 199.99,
      stock: 50,
      imageUrl: 'https://example.com/electronics.jpg',
      categoryType: 'Gadgets',
      rating: 4.5,
      reviewsCount: 120,
      manufacturer: 'Brand A',
      warranty: '2 years',
      discount: 10,
      tags: ['gadget', 'tech', 'electronics']
    },
    {
      id: 2,
      name: 'Books',
      createdAt: new Date('2023-03-10'),
      updatedAt: new Date('2023-04-05'),
      description: 'A collection of various books',
      status: 'Active',
      price: 15.99,
      stock: 200,
      imageUrl: 'https://example.com/books.jpg',
      categoryType: 'Literature',
      rating: 4.8,
      reviewsCount: 300,
      manufacturer: 'Publisher B',
      warranty: 'N/A',
      discount: 5,
      tags: ['literature', 'reading', 'books']
    },
    {
      id: 3,
      name: 'Clothing',
      createdAt: new Date('2023-05-25'),
      updatedAt: new Date('2023-06-15'),
      description: 'Fashionable clothing for all ages',
      status: 'Active',
      price: 39.99,
      stock: 150,
      imageUrl: 'https://example.com/clothing.jpg',
      categoryType: 'Apparel',
      rating: 4.2,
      reviewsCount: 75,
      manufacturer: 'Brand C',
      warranty: '1 year',
      discount: 15,
      tags: ['fashion', 'clothing', 'apparel']
    },
    {
      id: 4,
      name: 'Furniture',
      createdAt: new Date('2023-07-01'),
      updatedAt: new Date('2023-07-20'),
      description: 'Quality furniture for your home',
      status: 'Active',
      price: 499.99,
      stock: 20,
      imageUrl: 'https://example.com/furniture.jpg',
      categoryType: 'Home',
      rating: 4.7,
      reviewsCount: 50,
      manufacturer: 'Brand D',
      warranty: '5 years',
      discount: 20,
      tags: ['home', 'furniture', 'interior']
    },
    {
      id: 5,
      name: 'Toys',
      createdAt: new Date('2023-08-10'),
      updatedAt: new Date('2023-09-01'),
      description: 'Fun toys for kids of all ages',
      status: 'Active',
      price: 29.99,
      stock: 100,
      imageUrl: 'https://example.com/toys.jpg',
      categoryType: 'Kids',
      rating: 4.9,
      reviewsCount: 200,
      manufacturer: 'Brand E',
      warranty: '1 year',
      discount: 10,
      tags: ['toys', 'children', 'play']
    }
  ];

  editCategory(category: any) {
    alert(category.id);
  }

  deleteCategory(category: any) {
    alert(category.id);

  }
}
