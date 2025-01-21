import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ProductCardComponent } from "../../shared/product-card/product-card.component";
import { ProductsCarrouselComponent } from "../../shared/products-carrousel/products-carrousel.component";
import { FooterComponent } from "../../shared/footer/footer.component";
import { InViewDirective } from '../../directives/in-view.directive';
import { MockDataService } from '../../services/mock-data.service';
import { Product } from '../../models/product';
import { LazyLoadingImagesService } from '../../services/lazy-loading-images.service';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [
    RouterLink, 
    FooterComponent, 
    InViewDirective, 
    ProductCardComponent,
  ],
  providers: [MockDataService, LazyLoadingImagesService,],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.css'
})
export class LandingComponent {

  data: Product[];

  constructor(
    private readonly dataService: MockDataService,
    private readonly imageService: LazyLoadingImagesService) {
    this.data = dataService.getMockedData().splice(0, 3);
  }

  landingImageOnLoad(event: Event) {
    this.imageService.lazyLoadingImage(event);
  }
  
}
