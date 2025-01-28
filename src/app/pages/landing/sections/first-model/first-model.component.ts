import { Component } from '@angular/core';
import { LazyLoadingImagesService } from '../../../../services/lazy-loading-images.service';
import { InViewDirective } from '../../../../directives/in-view.directive';
import { LinkedButtonComponent } from "../../../../shared/linked-button/linked-button.component";

@Component({
  selector: 'app-first-model',
  standalone: true,
  imports: [InViewDirective, LinkedButtonComponent],
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
