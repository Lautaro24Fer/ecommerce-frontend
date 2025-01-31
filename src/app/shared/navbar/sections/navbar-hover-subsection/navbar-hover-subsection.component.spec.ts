import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarHoverSubsectionComponent } from './navbar-hover-subsection.component';

describe('NavbarHoverSubsectionComponent', () => {
  let component: NavbarHoverSubsectionComponent;
  let fixture: ComponentFixture<NavbarHoverSubsectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavbarHoverSubsectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavbarHoverSubsectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
