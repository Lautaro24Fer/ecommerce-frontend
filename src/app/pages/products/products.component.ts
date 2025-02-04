import { Component, OnChanges, OnInit, Renderer2, SimpleChanges } from '@angular/core';
import { MockDataService } from '../../services/mock-data.service';
import { Product } from '../../models/product';
import { ProductCardComponent } from "../../shared/product-card/product-card.component";
import { InViewDirective } from '../../directives/in-view.directive';
import { FilterComponent } from "./sections/filter/filter.component";
import { BoardComponent } from "./sections/board/board.component";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome"
import { AsideClass } from './models/asideClasses';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [ FilterComponent, BoardComponent ],
  providers: [MockDataService],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit{

  currentRoute!: string;

  data!: Product[];

  constructor(
    private readonly dataService: MockDataService,
    private readonly router: Router
  ) {}
  ngOnInit(): void {
    this.currentRoute = this.router.url;
    this.data = this.dataService.getMockedData();

    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: any) => {
        this.currentRoute = event.urlAfterRedirects;
      });
  }

}
