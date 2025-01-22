import { Component } from '@angular/core';
import { InViewDirective } from '../../../../directives/in-view.directive';
import { LazyLoadingImagesService } from '../../../../services/lazy-loading-images.service';

@Component({
  selector: 'app-carrousel',
  standalone: true,
  imports: [InViewDirective],
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
