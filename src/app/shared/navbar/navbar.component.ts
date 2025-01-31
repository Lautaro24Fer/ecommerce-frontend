import { Component, OnInit, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NavbarRoute } from './models/navbarRoutes';
import { NavbarItemComponent } from './sections/navbar-item/navbar-item.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, NavbarItemComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit{

  isHovered = signal(false);

  toogleSignal(){
    this.isHovered.set(!this.isHovered())
  }

  routes!: NavbarRoute[];

  constructor() {}
  ngOnInit(): void {
    this.routes = [
      {
        mainRoot: '/home',
        name: 'home',
      },
      {
        mainRoot: '/products/outlet',
        name: 'outlet',
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
        mainRoot: '/products/men',
        name: 'men',
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
        mainRoot: '/products/woman',
        name: 'woman',
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
        mainRoot: '/products/kids',
        name: 'kids',
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
        mainRoot: '/products/wear',
        name: 'wear',
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
        mainRoot: '/products/foot',
        name: 'foot',
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
        mainRoot: '/products/sales',
        name: 'Sales',
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
