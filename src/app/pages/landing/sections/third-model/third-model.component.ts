import { Component } from '@angular/core';
import { LazyLoadingImagesService } from '../../../../services/lazy-loading-images.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-third-model',
  standalone: true,
  imports: [RouterLink],
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
