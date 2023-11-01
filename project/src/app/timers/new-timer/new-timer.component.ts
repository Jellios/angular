import { Component, OnInit } from '@angular/core';
import { TimersService } from '../timers.service';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Timer } from '../timer';
import { Timestamp } from '@angular/fire/firestore';

@Component({
  selector: 'app-new-timer',
  templateUrl: './new-timer.component.html',
  styleUrls: ['./new-timer.component.css']
})
export class NewTimerComponent implements OnInit {
  constructor(private timersservice: TimersService, private fb: FormBuilder, private router: Router) {}
  form!: FormGroup;
  tmpDate: string | null = null;
  timer: Timer = {
    userID: '',
    title: '',
    description: '',
    startDate: null as any, // Set startDate to null
  };
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
    this.form = this.fb.group({
      'title': [null],
      'description': [null],
      'startDate': [null]
    });
  }
  onCreateTimer() {
  this.timer.title = this.title.value;
  this.timer.description = this.description.value;
  this.timer.startDate = Timestamp.fromDate(new Date(this.startDate.value));
  this.timersservice.addTimer(this.timer);
  }
  onCancel() {

  }
}
