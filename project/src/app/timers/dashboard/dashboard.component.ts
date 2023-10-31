import { Component, OnInit } from '@angular/core';
import { TimersService } from '../timers.service';
import { Timer } from '../timer';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  timerList: Timer[] = [];
  dateList: Date[] = [];

  constructor(private timerService: TimersService, private router: Router) {
    console.log("dashboard component loaded");
  }

  ngOnInit(): void {
    this.timerService.getAllTimers().subscribe((timers: Timer[]) => {
      this.timerList = timers;
      if (this.timerList.length > 0) {
        for (let i = 0; i < this.timerList.length; i++) {
          const timer = this.timerList[i];
          if (timer && timer.startDate) {
            const tmpDate = new Date(timer.startDate.seconds * 1000);
            this.dateList.push(tmpDate);
          }
        }
      }
    });
    
  }
  calculateTime(x:number): string
  {
   
      const out = this.timerService.calculateTimeAgo(this.dateList[x]);
      return out;
   
  }
  editTimer(x:number) {
    this.timerService.selectedTimerId = x;
    this.router.navigate(['timers/timerDetails']);
  }
}
