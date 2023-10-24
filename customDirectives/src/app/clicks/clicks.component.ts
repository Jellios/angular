import { Component, OnInit, Input } from '@angular/core';
import { ClickserviceService } from '../clickservice.service';

@Component({
  selector: 'app-clicks',
  templateUrl: './clicks.component.html',
  styleUrls: ['./clicks.component.css']
})
export class ClicksComponent implements OnInit {

  constructor(private clickService: ClickserviceService) {}
  @Input() tmp:number = 0;
  @Input() show:boolean = true;
  ngOnInit(): void {
    this.show = true;
  }
  onClick(): void {
    this.tmp = this.clickService.getNumberOfClicks();
  }
  onClickHide(): void {
    this.show = false;
  }
  onClickShow(): void 
  {
    
    this.show = true;
  }
}
