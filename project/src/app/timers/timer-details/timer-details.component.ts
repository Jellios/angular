import { Component, OnInit } from '@angular/core';
import { TimersService } from '../timers.service';
import { Timer } from '../timer';
import { DatePipe, FormatWidth } from '@angular/common';
import { Router } from '@angular/router';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { Timestamp } from '@angular/fire/firestore';

import { Observable } from 'rxjs';

@Component({
  selector: 'app-timer-details',
  templateUrl: './timer-details.component.html',
  styleUrls: ['./timer-details.component.css']
})
export class TimerDetailsComponent implements OnInit {
 
  saved: boolean = false;

  timer: Timer = {
    id: '',
    userID: '',
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
    this.timer = this.timersService.timerList[this.timersService.selectedTimerId];
   
    if (this.timersService.selectedTimerId >= 0 && this.timersService.selectedTimerId < this.timersService.timerList.length) {
      this.timer = this.timersService.timerList[this.timersService.selectedTimerId];
    }
    if (this.timer.startDate) {
      // Convert Firebase Timestamp to JavaScript Date using toDate()
      const startDate = this.timer.startDate.toDate();
      // Format the Date as a string using DatePipe
      this.tmpDate = this.datePipe.transform(startDate, 'yyyy-MM-dd');
    }
    this.form = this.fb.group({
      'title': [this.timer.title],
      'description': [this.timer.description],
      'startDate': [this.tmpDate]
    });
    this.saved = false;
  }
get title(): FormArray {
  return this.form.controls['title'] as FormArray;
}
get description(): FormArray {
  return this.form.controls['description'] as FormArray;
}
get startDate(): FormArray {
  return this.form.controls['startDate'] as FormArray;
}
  ngOnInit(): void {
   // console.log(this.timer.startDate);
   this.saved = false;
  }

  onSaveChanges() {
   


  console.log(this.timer);
  console.log(this.timer.startDate);
   this.timer.title = this.title.value;
   this.timer.description = this.description.value;
   this.timer.startDate = Timestamp.fromDate(new Date(this.startDate.value));
   console.log(this.timer.startDate);
   console.log(this.timer);
   this.timersService.timerList[this.timersService.selectedTimerId] = this.timer;
   this.timersService.updateTimer();
   this.router.navigate(['timers/dashboard']);
  }
  onDiscardChanges()
  {
    this.timersService.selectedTimerId = -1;
    this.router.navigate(['timers/dashboard']);
  }
}

