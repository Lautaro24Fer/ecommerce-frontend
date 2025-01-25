import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondModelComponent } from './second-model.component';

describe('SecondModelComponent', () => {
  let component: SecondModelComponent;
  let fixture: ComponentFixture<SecondModelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SecondModelComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecondModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
