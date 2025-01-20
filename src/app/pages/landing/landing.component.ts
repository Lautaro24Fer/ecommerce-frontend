import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ProductCardComponent } from "../../shared/product-card/product-card.component";
import { ProductsCarrouselComponent } from "../../shared/products-carrousel/products-carrousel.component";
import { FooterComponent } from "../../shared/footer/footer.component";
import { InViewDirective } from '../../directives/in-view.directive';
import { MockDataService } from '../../services/mock-data.service';
import { Product } from '../../models/product';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [RouterLink, FooterComponent, InViewDirective, ProductCardComponent],
  providers: [MockDataService],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.css'
})
export class LandingComponent {

  data: Product[];

  constructor(private readonly dataService: MockDataService) {
    this.data = dataService.getMockedData().splice(0, 3);
  }

  
}
