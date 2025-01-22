import { Component } from '@angular/core';
import { LazyLoadingImagesService } from '../../../../services/lazy-loading-images.service';

@Component({
  selector: 'app-first-model',
  standalone: true,
  imports: [],
  providers: [LazyLoadingImagesService],
  templateUrl: './first-model.component.html',
  styleUrl: './first-model.component.css'
})
export class FirstModelComponent {

  constructor(private readonly imageService: LazyLoadingImagesService) {}

  onLoadImage(event: Event) {
    this.imageService.lazyLoadingImage(event);
  }
}
