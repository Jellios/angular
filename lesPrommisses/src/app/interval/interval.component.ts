import { Component,OnInit } from '@angular/core';
import { IntervalService } from '../interval.service';
import { Subscription, interval } from 'rxjs';
@Component({
  selector: 'app-interval',
  templateUrl: './interval.component.html',
  styleUrls: ['./interval.component.css']
})
export class IntervalComponent implements OnInit {
 number: number = 0;
 
constructor (public intervalService: IntervalService) {

}
ngOnInit(): void {
  
this.intervalService.doeDing().subscribe(
  (number: number) => {
    this.number = number;
    console.log(number); 
  }
);



}
}
