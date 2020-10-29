import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';
import { ProductService } from './products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['../../styles/full-width-pics.css', '../../styles/bootstrap.min.css']
})
export class ProductsComponent implements OnInit {

  products: IProduct[];
  
  constructor(private productService: ProductService) {

  }  

  ngOnInit(): void {
    this.products = this.productService.getProducts();
  }

  buyProducts(): void {

  }
}
