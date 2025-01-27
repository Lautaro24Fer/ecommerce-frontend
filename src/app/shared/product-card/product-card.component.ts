import { CurrencyPipe, PercentPipe } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LazyLoadingImagesService } from '../../services/lazy-loading-images.service';
import { InViewDirective } from '../../directives/in-view.directive';
import { Product } from '../../models/product';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CurrencyPipe, PercentPipe, RouterLink, InViewDirective],
  providers: [LazyLoadingImagesService],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
})
export class ProductCardComponent{

  @Input({ required: true })
  product!: Product;

  constructor(private readonly imageService: LazyLoadingImagesService) {}

  onImageLoad(event: Event){
    this.imageService.lazyLoadingImage(event);
  }

  getOfferPrice(price: number, offerPorc: number): number{
    console.log("--get offer price--")
    console.log("price: " + price)
    console.log("offerPorc: " + offerPorc)
    const porcMount: number = price * offerPorc;
    return price - porcMount;
  }

}
