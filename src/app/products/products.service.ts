import { Injectable } from '@angular/core';
import { IProduct } from './product';

@Injectable({
    providedIn: 'root'
})
export class ProductService {

    getProducts(): IProduct[] {
        return [{
            name: "Baby Shoes 1",
            description: "Description of baby shoes 1.",
            price: 42.99,
            imageUrl: "",
            inventory: 10
          },
          {
            name: "Baby Shoes 2",
            description: "Description of baby shoes 2.",
            price: .99,
            imageUrl: "",
            inventory: 12
          },
          {
            name: "Baby Shoes 3",
            description: "Description of baby shoes 3.",
            price: 0.9,
            imageUrl: "",
            inventory: 4
          },
          {
            name: "Baby Shoes 4",
            description: "Description of baby shoes 4.",
            price: 54.3,
            imageUrl: "",
            inventory: 0
          },
          {
            name: "Baby Shoes 5",
            description: "Description of baby shoes 5.",
            price: -23.99,
            imageUrl: "",
            inventory: 5
          },
          {
            name: "Baby Shoes 6",
            description: "Description of baby shoes 6.",
            price: 32.00,
            imageUrl: "",
            inventory: 3
          },{
            name: "Baby Shoes 7",
            description: "Description of baby shoes 7.",
            price: 20.19,
            imageUrl: "",
            inventory: 25
          },
          {
            name: "Baby Shoes 8",
            description: "Description of baby shoes 8.",
            price: 12.89,
            imageUrl: "",
            inventory: 6
          }]
    }
}