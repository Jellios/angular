import { Directive, HostListener, Input } from '@angular/core';
import { ClickserviceService } from './clickservice.service';

@Directive({
  selector: '[appClickCounter]'
})
export class ClickCounterDirective  {

  @Input("appClickCounter") numberOfClicks = 0;
  constructor( private clickService: ClickserviceService) {}
  @HostListener('click') onClick(): void {
    this.numberOfClicks++;
    this.clickService.numberOfClicks = this.numberOfClicks;
    console.log("clicked this element: " + this.numberOfClicks + " times");
  }
 


}
