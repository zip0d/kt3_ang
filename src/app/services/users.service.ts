
import { Injectable } from '@angular/core';

export interface Product {
  brand: string;
  category: string;
  description: string;
  discountPercentage: number;
  id: number;
  images: string[];
  price: number;
  rating: number;
  stock: number;
  thumbnail: string;
  title: string;
}

@Injectable({
  providedIn: 'root'
})
export class ProductListService {
  private baseUrl = 'https://dummyjson.com/products?limit=50';

  public products: any[] = [];
  public input: string = '';
  public options: string[] = [];
  public selectedOption: string = '';
  public curPriceRange: number = 0;
  public ratingRange: number = 5;

  constructor() {
    this.getProducts()
      .then(() => {
        this.options = [...new Set(this.products.map(product => product.category))];
        this.curPriceRange = Math.round(this.maxPrice() / 2);
      })
      .then(() => {
        this.filterProducts();
      })
  }

  public async getProducts(): Promise<any> {
    return fetch(this.baseUrl)
      .then(res => res.json())
      .then(data => this.products = data.products)
      .catch(err => {
        console.log('Error fetching data:', err);
      });
  }
  public filterProducts(): Array<Product> {
    return this.products.filter(product => {
      const titleMatch = this.input ? product.title.toLowerCase().includes(this.input.toLowerCase()) : true;
      const categoryMatch = this.selectedOption ? product.category.includes(this.selectedOption) : true;
      const priceMatch = isNaN(this.curPriceRange) || product.price <= this.curPriceRange;
      const ratingMatch = isNaN(this.ratingRange) || Math.round(product.rating) <= this.ratingRange;

      return titleMatch && categoryMatch && priceMatch && ratingMatch;
    })
  }
  public maxPrice(): number {
    return Math.max(...this.products.map(product => product.price));
  }
}