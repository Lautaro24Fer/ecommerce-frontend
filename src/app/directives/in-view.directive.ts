import { isPlatformBrowser } from '@angular/common';
import { Directive, ElementRef, Inject, Input, OnInit, PLATFORM_ID, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appInView]',
  standalone: true
})
export class InViewDirective implements OnInit { 

  @Input('appInView') animationClass!: string;

  private observer?: IntersectionObserver;

  constructor(
    private el: ElementRef,
    private renderer: Renderer2,
    @Inject(PLATFORM_ID) private platformId: object // Inyecta el ID de la plataforma
  ) {}

  ngOnInit(): void {

    if(!this.animationClass || this.animationClass === ""){
      this.animationClass = 'animate-fadeInHorizontalFromRight'
    }

    if (isPlatformBrowser(this.platformId)) {
      this.observer = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) {
          this.renderer.addClass(this.el.nativeElement, this.animationClass);
          this.observer?.disconnect();
        }
      }, { threshold: 0.5 });

      this.observer.observe(this.el.nativeElement);
    }
  }
}
