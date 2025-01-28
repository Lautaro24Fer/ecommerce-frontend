import { Component } from '@angular/core';
import { LazyLoadingImagesService } from '../../../../services/lazy-loading-images.service';

@Component({
  selector: 'app-third-model',
  standalone: true,
  imports: [],
  providers: [LazyLoadingImagesService],
  templateUrl: './third-model.component.html',
  styleUrl: './third-model.component.css'
})
export class ThirdModelComponent {

  constructor(private readonly imageService: LazyLoadingImagesService){}

  onLoadImage(event: Event){
    this.imageService.lazyLoadingImage(event);
  }
}
