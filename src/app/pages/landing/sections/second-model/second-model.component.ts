import { Component, Input } from '@angular/core';
import { BubblHoverCardComponent } from "../../../../shared/bubbl-hover-card/bubbl-hover-card.component";
import { BubblSecondModelPosition } from '../../../../models/bubblSecondModelPosition';

@Component({
  selector: 'app-second-model',
  standalone: true,
  imports: [BubblHoverCardComponent],
  templateUrl: './second-model.component.html',
  styleUrl: './second-model.component.css'
})
export class SecondModelComponent {

  positions: BubblSecondModelPosition;

  @Input({ required: true })
  position!: string;

  @Input({ required: true })
  image!: string;

  @Input({ required: true })
  productUrl!: string;

  constructor() {
    this.positions = {
      bottomLeft: 'bottom-0 right-0 top-1/2 -translate-y-1/2 mt-3 mr-3',
      centerTop: 'bottom-full left-1/2 -translate-x-1/2 mb-3'
    }
  }

  displayCard(){
    document.querySelector("bubblCard")?.classList.add('bongAnimation')
  }

  undisplayCard(){
    document.querySelector("bubblCard")?.classList.remove('bongAnimation')
  }
}
