import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../../models/product';
import { MockDataService } from '../../services/mock-data.service';
import { ActivatedRoute, ActivatedRouteSnapshot, Router } from '@angular/router';
import { ProductCardComponent } from "../../shared/product-card/product-card.component";
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent implements OnInit{

  product!: Product;

  constructor(private readonly dataService: MockDataService, private readonly route: ActivatedRoute){
  }
  ngOnInit(): void {
    
    this.route.data.subscribe(({ product }) => {
      this.product = product;
    });

    console.log("\n\n--product--")
    console.log(this.product)
  }
}
