import { Component } from '@angular/core';
import { InViewDirective } from '../../../../directives/in-view.directive';
import { LazyLoadingImagesService } from '../../../../services/lazy-loading-images.service';
import { LinkedButtonComponent } from "../../../../shared/linked-button/linked-button.component";

@Component({
  selector: 'app-carrousel',
  standalone: true,
  imports: [InViewDirective, LinkedButtonComponent],
  providers: [LazyLoadingImagesService],
  templateUrl: './carrousel.component.html',
  styleUrl: './carrousel.component.css'
})
export class CarrouselComponent {

  constructor(private readonly imageService: LazyLoadingImagesService) {}

  onLoadImage(event: Event){
    this.imageService.lazyLoadingImage(event);
  }
}
