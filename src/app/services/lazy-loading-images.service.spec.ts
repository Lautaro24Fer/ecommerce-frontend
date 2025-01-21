import { TestBed } from '@angular/core/testing';

import { LazyLoadingImagesService } from './lazy-loading-images.service';

describe('LazyLoadingImagesService', () => {
  let service: LazyLoadingImagesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LazyLoadingImagesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
