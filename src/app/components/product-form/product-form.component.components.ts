import { Component, inject } from '@angular/core';
import { ProductListService } from '../../services/users.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-product-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './product-form.component.html',
  styleUrl: './product-form.component.css'
})
export class ProductFormComponent {
  public productListService: ProductListService = inject(ProductListService);
}