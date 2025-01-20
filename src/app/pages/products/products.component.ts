import { Component } from '@angular/core';
import { MockDataService } from '../../services/mock-data.service';
import { Product } from '../../models/product';
import { ProductCardComponent } from "../../shared/product-card/product-card.component";
import { InViewDirective } from '../../directives/in-view.directive';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [ProductCardComponent, InViewDirective],
  providers: [MockDataService],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  data!: Product[];

  constructor(dataService: MockDataService) {
    this.data = dataService.getMockedData();
  }
}
