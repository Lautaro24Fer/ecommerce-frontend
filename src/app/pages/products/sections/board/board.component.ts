import { Component, Input, OnInit } from '@angular/core';
import { ProductCardComponent } from "../../../../shared/product-card/product-card.component";
import { Product } from '../../../../models/product';
import { InViewDirective } from '../../../../directives/in-view.directive';

@Component({
  selector: 'app-board',
  standalone: true,
  imports: [ProductCardComponent],
  templateUrl: './board.component.html',
  styleUrl: './board.component.css'
})
export class BoardComponent {
  
  @Input({ required: true }) 
  data!: Product[];
  
}
