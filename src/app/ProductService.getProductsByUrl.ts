import { Component, OnInit } from '@angular/core';
import { ProductService } from './product.service';

@Component({
  selector: 'app-product-list',
  template: `
    <div *ngFor="let product of products">
      <h3>{{ product.name }}</h3>
      <p>Category: {{ product.category }}</p>
    </div>
  `
})
export class ProductListComponent implements OnInit {
  products: any[];

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    const url = 'https://dummyjson.com/products?limit=50'; 
    this.productService.getProductsByUrl(url).subscribe(products => {
      this.products = products;
    });
  }
}
