import { Component, Input, OnInit } from '@angular/core';
import { Timestamp, count, timestamp } from 'rxjs';

@Component({
  selector: 'app-clicks',
  templateUrl: './clicks.component.html',
  styleUrls: ['./clicks.component.css']
})

export class ClicksComponent implements OnInit {
  @Input() show:boolean=true;
  counter:number = 0;
  lijst:Array<any> = [];
  constructor() {
    
  }
  
  ngOnInit(): void {
    
  }
  onClick(): void {
    if (this.show == true)
    {
      this.show = true;
    }
    else
    {
      this.show = true;
    }
    this.counter++;
    this.lijst.push((this.counter +Date()));
    
  }
  
  

}
