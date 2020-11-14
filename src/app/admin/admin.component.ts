import { Component, OnInit } from '@angular/core';
import { IProduct, Product } from '../products/product';
import { ProductService } from '../products/products.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['../../styles/full-width-pics.css', '../../styles/bootstrap.min.css']
})
export class AdminComponent implements OnInit {

  products: IProduct[];
  model: Product = new Product("", "", 0.00, 0);

  errorMessage: string;

  productName: string;
  productDescription: string;
  productPrice: number;
  productAvailableInventory: number;


  productSaved: boolean;

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.getProducts().subscribe({
      next: products => this.products = products,
      error: err => this.errorMessage = err
    });
  }

  saveNewProduct(): void {
    this.productService
      .addProduct(this.model)
      .subscribe(product => this.products.push(product));
  }

}
