import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ProductCardComponent } from "../../shared/product-card/product-card.component";
import { ProductsCarrouselComponent } from "../../shared/products-carrousel/products-carrousel.component";
import { FooterComponent } from "../../shared/footer/footer.component";

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [RouterLink, ProductsCarrouselComponent, FooterComponent],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.css'
})
export class LandingComponent {

}
