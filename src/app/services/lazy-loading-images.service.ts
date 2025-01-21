import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LazyLoadingImagesService {

  constructor() { }

  lazyLoadingImage(event: Event){
    const image = event.target as HTMLImageElement;
    image.style.opacity = '1';
  }
}
