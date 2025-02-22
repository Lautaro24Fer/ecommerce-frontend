import { Component, Input, OnInit } from '@angular/core';
import { Color } from '../../models/color';
import { NgClass, NgStyle } from '@angular/common';

@Component({
  selector: 'app-colors',
  standalone: true,
  imports: [NgStyle],
  templateUrl: './colors.component.html',
  styleUrl: './colors.component.css'
})
export class ColorsComponent {

  colorsAvilable: Color[] = [
    { name: 'red', tone: '#FF0000' },
    { name: 'green', tone: '#00FF00' },
    { name: 'blue', tone: '#0000FF' },
    { name: 'yellow', tone: '#FFFF00' },
    { name: 'orange', tone: '#FFA500' },
    { name: 'purple', tone: '#800080' },
    { name: 'pink', tone: '#FFC0CB' },
    { name: 'brown', tone: '#A52A2A' },
    { name: 'black', tone: '#151515' },
    { name: 'white', tone: '#FFFFFF' },
    { name: 'gray', tone: '#808080' },
    { name: 'cyan', tone: '#00FFFF' },
    { name: 'magenta', tone: '#FF00FF' }
  ];

  @Input({ required: true })
  colors!: string[];

  getData(data: string){
    console.log("\n\n________________")
    console.log("esto es la data")
    console.log(data)
  }

  getTone(colorName: string): string {
    const color: Color | undefined = this.colorsAvilable.find(c => c.name === colorName);

    if (!color) {
      console.error("No se encontró el color")
      return '#FF0000'
    }

    return color.tone.toLowerCase();
  }


}
