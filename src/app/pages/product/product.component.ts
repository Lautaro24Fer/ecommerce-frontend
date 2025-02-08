import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../../models/product';
import { MockDataService } from '../../services/mock-data.service';
import { ActivatedRoute, ActivatedRouteSnapshot, Router } from '@angular/router';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [],
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
  }
}
