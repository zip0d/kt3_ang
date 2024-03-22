
import { Component, inject } from '@angular/core';
import { ProductListService } from '../../services/users.service';
import { ProductItemComponent } from '../user-item/user-item.component';


@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [ProductItemComponent],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css'
})
export class ProductListComponent {
  public productsListService: ProductListService = inject(ProductListService);

  ngOnInit(): void {
    this.productsListService.getProducts();
  }
}