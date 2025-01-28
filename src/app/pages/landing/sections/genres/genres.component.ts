import { Component } from '@angular/core';
import { ProductGenre } from '../../../../models/genres';
import { RouterLink } from '@angular/router';
import { InViewDirective } from '../../../../directives/in-view.directive';
import { LinkedButtonComponent } from "../../../../shared/linked-button/linked-button.component";

@Component({
  selector: 'app-genres',
  standalone: true,
  imports: [InViewDirective, LinkedButtonComponent],
  templateUrl: './genres.component.html',
  styleUrl: './genres.component.css'
})
export class GenresComponent {

  genresData!: ProductGenre[];

  constructor(){
    this.genresData = [
      {
        id: 1,
        name: 'Men',
        image: "https://i8.amplience.net/t/jpl/jdie_product_list?plu=jd_711495_al&qlt=85&qlt=92&w=320&h=320&v=1&fmt=auto",
        color: 'green'
      },
      {
        id: 2,
        name: 'Woman',
        image: 'https://imgcdn.stablediffusionweb.com/2024/4/4/5eb7f983-a860-4686-8a6c-523311ca5227.jpg',
        color: 'beige'
      },
      {
        id: 3,
        name: 'Kids',
        image: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/646645108dcf4a8086b1a6fa69ddd412_9366/Crew_Set_Kids_Blue_IX9817_21_model.jpg',
        color: 'aliceblue'
      },
    ]
  }

}
