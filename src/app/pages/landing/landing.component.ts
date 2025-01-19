import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ProductCardComponent } from "../../shared/product-card/product-card.component";
import { ProductsCarrouselComponent } from "../../shared/products-carrousel/products-carrousel.component";
import { FooterComponent } from "../../shared/footer/footer.component";
import { InViewDirective } from '../../directives/in-view.directive';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [RouterLink, ProductsCarrouselComponent, FooterComponent, InViewDirective],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.css'
})
export class LandingComponent {

}
