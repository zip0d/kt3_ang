
import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-product-item',
  standalone: true,
  imports: [],
  templateUrl: './user-item.component.html',
  styleUrl: './user-item.component.css'
})
export class ProductItemComponent {
  @Input() public img: string;
  @Input() public title: string;
  @Input() public category: string;
  @Input() public price: number;
  @Input() public rating: number;
}