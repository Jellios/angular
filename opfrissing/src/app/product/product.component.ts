import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})

export class ProductComponent implements OnInit{
  @Input() product:Product = {
   productId: -1,
   productName: "tmp",
   productDescription: "tmp tmp",
   productPrice: 0,
   productImagePath: "",
   ProductCategoryId: 0,
   ProductInStock: false,
  };
  constructor() {
  
  }
  ngOnInit(): void {
  
}
}
