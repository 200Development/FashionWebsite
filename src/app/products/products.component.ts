import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['../../styles/full-width-pics.css', '../../styles/bootstrap.min.css']
})
export class ProductsComponent implements OnInit {

  products: IProduct[] = [{
    name: "Baby Shoes 1",
    description: "Description of baby shoes 1.",
    price: 42.99,
    imageUrl: ""
  },
  {
    name: "Baby Shoes 2",
    description: "Description of baby shoes 2.",
    price: .99,
    imageUrl: ""
  },
  {
    name: "Baby Shoes 3",
    description: "Description of baby shoes 3.",
    price: 0.9,
    imageUrl: ""
  },
  {
    name: "Baby Shoes 4",
    description: "Description of baby shoes 4.",
    price: 54.3,
    imageUrl: ""
  },
  {
    name: "Baby Shoes 5",
    description: "Description of baby shoes 5.",
    price: -23.99,
    imageUrl: ""
  },
  {
    name: "Baby Shoes 6",
    description: "Description of baby shoes 6.",
    price: 32.00,
    imageUrl: ""
  },{
    name: "Baby Shoes 7",
    description: "Description of baby shoes 7.",
    price: 20.19,
    imageUrl: ""
  },
  {
    name: "Baby Shoes 8",
    description: "Description of baby shoes 8.",
    price: 12.89,
    imageUrl: ""
  }]
 

  constructor() { }

  ngOnInit(): void {
  }

  buyProducts(): void {

  }
}
