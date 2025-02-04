import { Component, OnInit, signal } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { NavbarRoute } from './models/navbarRoutes';
import { NavbarItemComponent } from './sections/navbar-item/navbar-item.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, NavbarItemComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit {

  validTypes: string[] = ['shirt', 'pants', 'short', 'shoes', 'accesories'];
  validCategories: string[] = ['casual', 'sport', 'elegant'];
  validGenres: string[] = ['men', 'woman', 'kids'];

  isHovered = signal(false);

  currentType!: string | null;
  currentCategory!: string | null;
  currentGenre!: string | null;


  toogleSignal(){
    this.isHovered.set(!this.isHovered())
  }

  routes!: NavbarRoute[];

  constructor(private readonly route: ActivatedRoute, private router: Router) {
    this.route.paramMap.subscribe(params => {
      this.currentType = params.get('type');
      this.currentCategory = params.get('category');
      this.currentGenre = params.get('genre');

      
    })
  }

  ngOnInit(): void {
    this.routes = [
      {
        mainRoot: '/home',
        name: 'home',
      },
      {
        mainRoot: '/products/all',
        name: 'outlet',
        queryParams: { sale: 'outlet' },
        childrenRoutes: [
          {
            title: 'Botines',
            childrenRoutes: [
              {
                name: 'Modelo 1 ',
                href: '/products'
              },
              {
                name: 'Modelo 2',
                href: '/products'
              },
              {
                name: 'Modelo 3',
                href: '/products'
              },
            ]
          },
          {
            title: 'Camisetas',
            childrenRoutes: [
              {
                name: 'Modelo 1 ',
                href: '/products'
              },
              {
                name: 'Modelo 2',
                href: '/products'
              },
              {
                name: 'Modelo 3',
                href: '/products'
              },
            ]
          },
          {
            title: 'Balones',
            childrenRoutes: [
              {
                name: 'Modelo 1 ',
                href: '/products'
              },
              {
                name: 'Modelo 2',
                href: '/products'
              },
              {
                name: 'Modelo 3',
                href: '/products'
              },
            ]
          }
        ]
      },
      {
        mainRoot: '/products/all',
        name: 'men',
        queryParams: { genre: 'men' },
        childrenRoutes: [
          {
            title: 'Botines',
            childrenRoutes: [
              {
                name: 'Modelo 1 ',
                href: '/products'
              },
              {
                name: 'Modelo 2',
                href: '/products'
              },
              {
                name: 'Modelo 3',
                href: '/products'
              },
            ]
          },
          {
            title: 'Camisetas',
            childrenRoutes: [
              {
                name: 'Modelo 1 ',
                href: '/products'
              },
              {
                name: 'Modelo 2',
                href: '/products'
              },
              {
                name: 'Modelo 3',
                href: '/products'
              },
            ]
          },
          {
            title: 'Balones',
            childrenRoutes: [
              {
                name: 'Modelo 1 ',
                href: '/products'
              },
              {
                name: 'Modelo 2',
                href: '/products'
              },
              {
                name: 'Modelo 3',
                href: '/products'
              },
            ]
          }
        ]
      },
      {
        mainRoot: '/products/all',
        name: 'woman',
        queryParams: { genre: 'woman' },
        childrenRoutes: [
          {
            title: 'Botines',
            childrenRoutes: [
              {
                name: 'Modelo 1 ',
                href: '/products'
              },
              {
                name: 'Modelo 2',
                href: '/products'
              },
              {
                name: 'Modelo 3',
                href: '/products'
              },
            ]
          },
          {
            title: 'Camisetas',
            childrenRoutes: [
              {
                name: 'Modelo 1 ',
                href: '/products'
              },
              {
                name: 'Modelo 2',
                href: '/products'
              },
              {
                name: 'Modelo 3',
                href: '/products'
              },
            ]
          },
          {
            title: 'Balones',
            childrenRoutes: [
              {
                name: 'Modelo 1 ',
                href: '/products'
              },
              {
                name: 'Modelo 2',
                href: '/products'
              },
              {
                name: 'Modelo 3',
                href: '/products'
              },
            ]
          }
        ]
      },
      {
        mainRoot: '/products/all',
        name: 'kids',
        queryParams: { genre: 'kids' },
        childrenRoutes: [
          {
            title: 'Botines',
            childrenRoutes: [
              {
                name: 'Modelo 1 ',
                href: '/products'
              },
              {
                name: 'Modelo 2',
                href: '/products'
              },
              {
                name: 'Modelo 3',
                href: '/products'
              },
            ]
          },
          {
            title: 'Camisetas',
            childrenRoutes: [
              {
                name: 'Modelo 1 ',
                href: '/products'
              },
              {
                name: 'Modelo 2',
                href: '/products'
              },
              {
                name: 'Modelo 3',
                href: '/products'
              },
            ]
          },
          {
            title: 'Balones',
            childrenRoutes: [
              {
                name: 'Modelo 1 ',
                href: '/products'
              },
              {
                name: 'Modelo 2',
                href: '/products'
              },
              {
                name: 'Modelo 3',
                href: '/products'
              },
            ]
          }
        ]
      },
      {
        mainRoot: '/products/shirts',
        name: 'shirts',
        childrenRoutes: [
          {
            title: 'Botines',
            childrenRoutes: [
              {
                name: 'Modelo 1 ',
                href: '/products'
              },
              {
                name: 'Modelo 2',
                href: '/products'
              },
              {
                name: 'Modelo 3',
                href: '/products'
              },
            ]
          },
          {
            title: 'Camisetas',
            childrenRoutes: [
              {
                name: 'Modelo 1 ',
                href: '/products'
              },
              {
                name: 'Modelo 2',
                href: '/products'
              },
              {
                name: 'Modelo 3',
                href: '/products'
              },
            ]
          },
          {
            title: 'Balones',
            childrenRoutes: [
              {
                name: 'Modelo 1 ',
                href: '/products'
              },
              {
                name: 'Modelo 2',
                href: '/products'
              },
              {
                name: 'Modelo 3',
                href: '/products'
              },
            ]
          }
        ]
      },
      {
        mainRoot: '/products/shoes',
        name: 'shoes',
        childrenRoutes: [
          {
            title: 'Botines',
            childrenRoutes: [
              {
                name: 'Modelo 1 ',
                href: '/products'
              },
              {
                name: 'Modelo 2',
                href: '/products'
              },
              {
                name: 'Modelo 3',
                href: '/products'
              },
            ]
          },
          {
            title: 'Camisetas',
            childrenRoutes: [
              {
                name: 'Modelo 1 ',
                href: '/products'
              },
              {
                name: 'Modelo 2',
                href: '/products'
              },
              {
                name: 'Modelo 3',
                href: '/products'
              },
            ]
          },
          {
            title: 'Balones',
            childrenRoutes: [
              {
                name: 'Modelo 1 ',
                href: '/products'
              },
              {
                name: 'Modelo 2',
                href: '/products'
              },
              {
                name: 'Modelo 3',
                href: '/products'
              },
            ]
          }
        ]
      },
      {
        mainRoot: '/products/all',
        name: 'Sales',
        queryParams: { sale: 'discount' },
        childrenRoutes: [
          {
            title: 'Botines',
            childrenRoutes: [
              {
                name: 'Modelo 1 ',
                href: '/products'
              },
              {
                name: 'Modelo 2',
                href: '/products'
              },
              {
                name: 'Modelo 3',
                href: '/products'
              },
            ]
          },
          {
            title: 'Camisetas',
            childrenRoutes: [
              {
                name: 'Modelo 1 ',
                href: '/products'
              },
              {
                name: 'Modelo 2',
                href: '/products'
              },
              {
                name: 'Modelo 3',
                href: '/products'
              },
            ]
          },
          {
            title: 'Balones',
            childrenRoutes: [
              {
                name: 'Modelo 1 ',
                href: '/products'
              },
              {
                name: 'Modelo 2',
                href: '/products'
              },
              {
                name: 'Modelo 3',
                href: '/products'
              },
            ]
          }
        ]
      },
    ]
  }


}
