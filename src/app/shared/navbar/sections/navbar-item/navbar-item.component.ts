import { Component, Input, EventEmitter, Output, signal } from '@angular/core';
import { NavbarRoute } from '../../models/navbarRoutes';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { NavbarHoverSubsectionComponent } from "../navbar-hover-subsection/navbar-hover-subsection.component";

@Component({
  selector: 'app-navbar-item',
  standalone: true,
  imports: [RouterLink, NavbarHoverSubsectionComponent],
  templateUrl: './navbar-item.component.html',
  styleUrl: './navbar-item.component.css'
})
export class NavbarItemComponent {

  @Input({ required: true })
  navbarItem!: NavbarRoute;

  @Output() toogle = new EventEmitter<boolean>();

  isHovered = signal(false);

  constructor() {}

  getUrl(){

    let url: string = ''
    if(this.navbarItem.queryParams){
      url = this.navbarItem.mainRoot + this.navbarItem.queryParams as string;
      return url;
    }
    url = this.navbarItem.mainRoot;
    return url;
  }

  eventEmitted(){
    this.isHovered.set(!this.isHovered());
    this.toogle.emit(this.isHovered());
  }
}
