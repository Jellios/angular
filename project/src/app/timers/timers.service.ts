import { Injectable } from '@angular/core';
import { Timer } from './timer';
@Injectable({
  providedIn: 'root'
})
export class TimersService {

    timerList: Timer[] = [];
  constructor() { }
}
