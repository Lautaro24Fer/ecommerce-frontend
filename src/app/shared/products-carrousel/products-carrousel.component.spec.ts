import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsCarrouselComponent } from './products-carrousel.component';

describe('ProductsCarrouselComponent', () => {
  let component: ProductsCarrouselComponent;
  let fixture: ComponentFixture<ProductsCarrouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductsCarrouselComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductsCarrouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
