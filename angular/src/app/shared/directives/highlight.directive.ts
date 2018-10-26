import { Directive, HostListener, HostBinding, ElementRef, Renderer } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  possibleColors = [
    'darksalmon', 'hotpink', 'lightskyblue', 'goldenrod', 'peachpuff',
    'mediumspringgreen', 'cornflowerblue', 'blanchedalmond', 'lightslategrey', 'red', 'blue', 'black', 'magenta'
  ];

  constructor(private el: ElementRef, private renderer: Renderer) {
    console.log('DIRECTIVE!');

  }

  @HostBinding('style.text-decoration') decoration = '';

  @HostBinding('style.color') color: string;

  @HostListener('mouseover')
  onmouseover() {
    console.log('over');
    this.decoration = 'underline';

    const colorPick = Math.floor(Math.random() * this.possibleColors.length);

    this.color = this.possibleColors[colorPick];
  }

}
