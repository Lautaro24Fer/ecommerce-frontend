import { CurrencyPipe } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CurrencyPipe, RouterLink],
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

}
