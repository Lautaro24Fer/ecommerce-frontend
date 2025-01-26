import { Component, Input } from '@angular/core';
import { BubblSecondModelPosition } from '../../models/bubblSecondModelPosition';

@Component({
  selector: 'app-bubbl-hover-card',
  standalone: true,
  imports: [],
  templateUrl: './bubbl-hover-card.component.html',
  styleUrl: './bubbl-hover-card.component.css'
})
export class BubblHoverCardComponent {

  cardPositions: BubblSecondModelPosition;

  @Input()
  cardDisplayPosition: string = 'topCenter';

  @Input({ required: true })
  image!: string;

  @Input({ required: true })
  productUrl!: string;

  constructor() {
    this.cardPositions = {
      bottomLeft: 'bottom-0 right-0 top-1/2 -translate-y-1/2 mt-3 mr-3',
      topCenter: 'bottom-full left-1/2 -translate-x-1/2 mb-3'
    }
  }



  cardPositionament(): string {
    if(this.cardDisplayPosition === 'topCenter'){
      return this.cardPositions.topCenter;
    }
    return this.cardPositions.bottomLeft;
  }

  displayCard(){
    document.querySelector("bubblCard")?.classList.add('bongAnimation')
  }

  undisplayCard(){
    document.querySelector("bubblCard")?.classList.remove('bongAnimation')
  }
}
