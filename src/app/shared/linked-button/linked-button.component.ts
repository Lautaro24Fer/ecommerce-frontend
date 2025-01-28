import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-linked-button',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './linked-button.component.html',
  styleUrl: './linked-button.component.css'
})
export class LinkedButtonComponent {

  @Input({ required: true })
  text!: string;

  @Input({ required: true })
  href!: string;

  @Input({ required: true })
  hoverBackground!: string;

}
