import { Component, OnInit } from '@angular/core';
import { MockDataService } from '../../services/mock-data.service';
import { Product } from '../../models/product';
import { ProductCardComponent } from "../../shared/product-card/product-card.component";
import { InViewDirective } from '../../directives/in-view.directive';
import { FilterComponent } from "./sections/filter/filter.component";
import { BoardComponent } from "./sections/board/board.component";

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [ FilterComponent, BoardComponent],
  providers: [MockDataService],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit {
  data!: Product[];

  constructor(dataService: MockDataService) {
    this.data = dataService.getMockedData();
  }
  ngOnInit(): void {
    console.log("--DATA--")
    console.log(this.data.length)
  }
}
