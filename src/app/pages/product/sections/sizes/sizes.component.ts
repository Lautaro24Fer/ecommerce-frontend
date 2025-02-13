import { Component, Input } from '@angular/core';
import { ProductSize } from '../../../../models/product';

@Component({
  selector: 'app-sizes',
  standalone: true,
  imports: [],
  templateUrl: './sizes.component.html',
  styleUrl: './sizes.component.css'
})
export class SizesComponent {

  @Input({ required: true })
  sizes!: ProductSize[];
}
