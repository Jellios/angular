import { Directive, ElementRef, HostListener, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appTable]'
})
export class TableDirective implements OnInit {

  constructor(private ref: ElementRef, private renderer: Renderer2) { }
  ngOnInit(): void {
    this.renderer.setStyle(this.ref.nativeElement, 'background-color','white');
  }


 @HostListener('mouseenter') MyMouseEnter(eventData: Event) : void {
  //console.log('enter');
  this.renderer.setStyle(this.ref.nativeElement, 'background-color','lightgray');
 }
  


 @HostListener('mouseleave') MyMouseLeave(eventData: Event) : void {
  //console.log('leave');
  this.renderer.setStyle(this.ref.nativeElement, 'background-color','white');
 }
}
