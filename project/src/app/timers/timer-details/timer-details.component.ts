import { Component, OnInit } from '@angular/core';
import { TimersService } from '../timers.service';
import { Timer } from '../timer';
import { DatePipe } from '@angular/common';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-timer-details',
  templateUrl: './timer-details.component.html',
  styleUrls: ['./timer-details.component.css']
})
export class TimerDetailsComponent implements OnInit {

  timer: Timer = {
    title: '',
    description: '',
    startDate: null as any, // Set startDate to null
  };
  form !: FormGroup;
  tmpDate: string | null = null; // Change the type to string | null

  constructor(private timersService: TimersService, private datePipe: DatePipe, private router:Router, private fb: FormBuilder) {
    if (this.timersService.selectedTimerId == -1)
    {
      this.router.navigate(['timers/dashboard']);
    }
    this.form = this.fb.group({
      'title': [''],
      'description': [''],
      'startDate': ['']
    });
    if (this.timersService.selectedTimerId >= 0 && this.timersService.selectedTimerId < this.timersService.timerList.length) {
      this.timer = this.timersService.timerList[this.timersService.selectedTimerId];
    }
    if (this.timer.startDate) {
      // Convert Firebase Timestamp to JavaScript Date using toDate()
      const startDate = this.timer.startDate.toDate();
      // Format the Date as a string using DatePipe
      this.tmpDate = this.datePipe.transform(startDate, 'yyyy-MM-dd');
    }
  }

  ngOnInit(): void {
    console.log(this.timer.startDate);
  }
  onSaveChanges() {
    
  }
}
