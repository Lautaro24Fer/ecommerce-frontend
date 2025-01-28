import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkedButtonComponent } from './linked-button.component';

describe('LinkedButtonComponent', () => {
  let component: LinkedButtonComponent;
  let fixture: ComponentFixture<LinkedButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LinkedButtonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LinkedButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
