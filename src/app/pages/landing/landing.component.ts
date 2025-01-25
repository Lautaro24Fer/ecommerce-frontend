import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ProductCardComponent } from "../../shared/product-card/product-card.component";
import { ProductsCarrouselComponent } from "../../shared/products-carrousel/products-carrousel.component";
import { FooterComponent } from "../../shared/footer/footer.component";
import { InViewDirective } from '../../directives/in-view.directive';
import { MockDataService } from '../../services/mock-data.service';
import { Product } from '../../models/product';
import { LazyLoadingImagesService } from '../../services/lazy-loading-images.service';
import { FirstModelComponent } from "./sections/first-model/first-model.component";
import { CarrouselComponent } from "./sections/carrousel/carrousel.component";
import { NewProductsComponent } from "./sections/new-products/new-products.component";
import { GenresComponent } from "./sections/genres/genres.component";
import { SecondModelComponent } from "./sections/second-model/second-model.component";

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [
    FooterComponent,
    FirstModelComponent,
    CarrouselComponent,
    NewProductsComponent,
    GenresComponent,
    SecondModelComponent
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
