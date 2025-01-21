import { CurrencyPipe } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LazyLoadingImagesService } from '../../services/lazy-loading-images.service';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CurrencyPipe, RouterLink],
  providers: [LazyLoadingImagesService],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
})
export class ProductCardComponent{

  @Input({ required: true })
  name!: string;
  
  @Input({ required: true })
  description!: string;

  @Input({ required: true })
  imageUrl!: string;

  @Input({ required: true })
  price!: number;

  @Input({ required: true })
  color!: string[];

  constructor(private readonly imageService: LazyLoadingImagesService) {}

  onImageLoad(event: Event){
    this.imageService.lazyLoadingImage(event);
  }

}
