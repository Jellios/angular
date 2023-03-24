import { Component, OnInit } from '@angular/core';
import { Data } from '@angular/router';
import { count } from 'rxjs';

@Component({
  selector: 'app-clicks',
  templateUrl: './clicks.component.html',
  styleUrls: ['./clicks.component.css']

})

export class ClicksComponent implements OnInit {
  public fase : boolean = false;
  public check : boolean = false;
//today: Date = new Date;

  lijst: Date[] =  [];

  ngOnInit(): void {

  }
  constructor() {}
   onClick():void {
     const today = new Date();
    if (this.fase)
    {
      this.fase = false;
    }
    else
    {
      this.fase = true;
    }
    this.lijst.push(today)
    if (this.lijst.length > 4 && this.check == false)
    {
      this.check = true;
    }
  }

}
