import { Component, Input, OnInit } from '@angular/core';
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

export class SecondModelComponent implements OnInit {

  modelProducts!: Product[];

  constructor(private readonly dataService: MockDataService){}
  ngOnInit(): void {
    this.modelProducts = this.dataService.getMockedData().filter(product => {
      const productsDisplayed: string[] = [
        'Camiseta Atletico Madrid',
        'Short Atletico Madrid',
        'Botines Future 2.1 Netfit'
      ]
      if(productsDisplayed.includes(product.name)){
        return product;
      }
      return false;
    })

    
  }

  getProduct(name: string, recourse: string){
    const product = this.modelProducts.find(p => p.name.toLowerCase() === name.toLowerCase());

    switch(recourse){
      case 'image':
        return product?.imageUrl
      break;
      case 'productUrl':
        return product?.imageUrl
      break;
      default: 
        return ''
      break;
    }
  }
}
