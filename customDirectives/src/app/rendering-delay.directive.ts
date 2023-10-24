import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appRenderingDelay]'
})
export class RenderingDelayDirective {

  constructor() { }
@HostListener('click') onClick(): void {
  setTimeout(() => {
    console.log("wachten");
  }, 1000);
}
 
    

}
