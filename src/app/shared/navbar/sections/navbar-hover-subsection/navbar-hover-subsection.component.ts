import { Component, Input } from '@angular/core';
import { SubNavbarRoute } from '../../models/navbarRoutes';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar-hover-subsection',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './navbar-hover-subsection.component.html',
  styleUrl: './navbar-hover-subsection.component.css'
})
export class NavbarHoverSubsectionComponent {

  @Input({ required: true })
  subMenu!: SubNavbarRoute;
}
