import { AfterViewInit, Component, ElementRef, OnInit, Renderer2, signal, ViewChild } from '@angular/core';
import { AsideClass } from '../../models/asideClasses';

@Component({
  selector: 'app-filter',
  standalone: true,
  imports: [],
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.css'
})
export class FilterComponent implements OnInit, AfterViewInit{

  @ViewChild('aside')
  asideEl!: ElementRef<HTMLElement>;

  @ViewChild('form')
  formEl!: ElementRef<HTMLElement>;

  isOpen = signal(false);

  constructor(private readonly renderer: Renderer2){}
  

  toggleMenu(){
    this.isOpen.set(!this.isOpen())
  }

  ngOnInit(): void { }

  ngAfterViewInit(): void {
    this.renderer.removeClass(this.asideEl.nativeElement, 'closeBoard');
    this.renderer.removeClass(this.formEl.nativeElement, 'unshowFilter');
  }
}
