import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RouterService {

  private readonly validPaths: Set<string>;

  constructor() { 
    this.validPaths = new Set<string>([
      'outlet',
      'shirts',
      'pants',
      'shoes',
      'sales',
      'jacket',
      'accesories',
      'men-outlet',
      'woman-outlet',
      'girl-outlet',
      'boy-outlet',
      'men-all',
      'woman-all',
      'girl-all',
      'boy-all',
      'men-all',
      'woman-all',
      'girl-all',
      'boy-all',
    ])
  }

  isValidSlug(slug: string): boolean{
    return this.validPaths.has(slug);
  }

  getFather(slug: string): string {

    const slugSplitted: string[] = slug.split('-');

    while(slugSplitted.length > 0){

      const currentSlug: string = slugSplitted.join('-');

      if(this.isValidSlug(currentSlug)){
        return currentSlug
      }

      slugSplitted.pop()
    }

    return ''
  }
} 
