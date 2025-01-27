import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-filter',
  standalone: true,
  imports: [],
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.css'
})
export class FilterComponent {

  @ViewChild('asideSection')
  asideSection!: ElementRef;

  @ViewChild('form')
  form!: ElementRef;

  toggleMenu(){
    
  }
}
