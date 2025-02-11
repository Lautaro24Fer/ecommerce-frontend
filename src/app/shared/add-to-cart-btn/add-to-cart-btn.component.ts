import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-add-to-cart-btn',
  standalone: true,
  imports: [],
  templateUrl: './add-to-cart-btn.component.html',
  styleUrl: './add-to-cart-btn.component.css'
})
export class AddToCartBtnComponent {

  isPressed = signal(false);

  constructor() {}

  toggleState(){
    this.isPressed.set(!this.isPressed());
  }

}
