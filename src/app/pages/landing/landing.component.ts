import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ProductCardComponent } from "../../shared/product-card/product-card.component";

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [RouterLink, ProductCardComponent],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.css'
})
export class LandingComponent {

}
