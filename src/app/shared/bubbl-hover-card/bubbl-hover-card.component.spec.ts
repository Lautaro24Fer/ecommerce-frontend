import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BubblHoverCardComponent } from './bubbl-hover-card.component';

describe('BubblHoverCardComponent', () => {
  let component: BubblHoverCardComponent;
  let fixture: ComponentFixture<BubblHoverCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BubblHoverCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BubblHoverCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
