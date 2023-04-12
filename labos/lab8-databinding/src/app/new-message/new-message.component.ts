import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-new-message',
  templateUrl: './new-message.component.html',
  styleUrls: ['./new-message.component.css']
})
export class NewMessageComponent implements OnInit {
  inputField: string = '';
  @Output() newMessage = new EventEmitter<string>();
constructor() {}
ngOnInit(): void {}

onAddClick(): void {
  this.newMessage.emit(this.inputField);
  this.inputField = '';
}
}
