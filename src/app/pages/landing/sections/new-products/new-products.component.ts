import { Component } from '@angular/core';
import { ProductCardComponent } from '../../../../shared/product-card/product-card.component';
import { InViewDirective } from '../../../../directives/in-view.directive';
import { Product } from '../../../../models/product';
import { MockDataService } from '../../../../services/mock-data.service';

@Component({
  selector: 'app-new-products',
  standalone: true,
  imports: [ProductCardComponent, InViewDirective],
  providers: [MockDataService],
  templateUrl: './new-products.component.html',
  styleUrl: './new-products.component.css'
})
export class NewProductsComponent {

  data: Product[];

  constructor(private readonly dataService: MockDataService) {
    this.data = this.dataService.getMockedData().splice(0, 3);
  }
}
