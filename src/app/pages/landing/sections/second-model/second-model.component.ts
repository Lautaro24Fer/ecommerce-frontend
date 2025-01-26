import { Component, Input } from '@angular/core';
import { BubblHoverCardComponent } from "../../../../shared/bubbl-hover-card/bubbl-hover-card.component";
import { BubblSecondModelPosition } from '../../../../models/bubblSecondModelPosition';
import { Product } from '../../../../models/product';
import { MockDataService } from '../../../../services/mock-data.service';

@Component({
  selector: 'app-second-model',
  standalone: true,
  imports: [BubblHoverCardComponent],
  templateUrl: './second-model.component.html',
  styleUrl: './second-model.component.css'
})
export class SecondModelComponent {

  modelProducts: Product[];

  constructor(private readonly dataService: MockDataService){
    this.modelProducts = dataService.getMockedData().filter(product => {
      const productsDisplayed: string[] = [
        'Camiseta Atletico Madrid',
        'Short Atletico Madrid',
        'Botines Future 2.1 Netfit'
      ]
      if(!productsDisplayed.includes(product.name)){
        return product;
      }
    })
  }

  
}
