import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['../../styles/full-width-pics.css', '../../styles/bootstrap.min.css']
})
export class AdminComponent implements OnInit {

  productName: string;
  productDescription: string;
  productPrice: number;
  productAvailableInventory: number; 

  constructor() { }

  ngOnInit(): void {
  }

  saveNewProduct(): boolean {

    
    return true;
  }

}
