import { Component, Input } from '@angular/core';
import { ProductCardComponent } from "../product-card/product-card.component";
import { Product } from '../../models/product';

@Component({
  selector: 'app-products-carrousel',
  standalone: true,
  imports: [ProductCardComponent],
  templateUrl: './products-carrousel.component.html',
  styleUrl: './products-carrousel.component.css'
})
export class ProductsCarrouselComponent {

 @Input({ required: true })
  data: Product[] = [];

 constructor() {}
}
