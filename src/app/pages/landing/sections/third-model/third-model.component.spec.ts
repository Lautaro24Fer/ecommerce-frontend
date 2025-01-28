import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThirdModelComponent } from './third-model.component';

describe('ThirdModelComponent', () => {
  let component: ThirdModelComponent;
  let fixture: ComponentFixture<ThirdModelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ThirdModelComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ThirdModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
