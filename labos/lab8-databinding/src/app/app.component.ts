import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'lab8-databinding';
  messages = [
    "hallo",
    "ik",
    "ben",
    "jo",
    "en",
    "ik",
    "werk",
    "in",
    "de",
    "knopjes",
    "fabriek"
  ];
onNewMessage(message: string): void {
  this.messages.push(message);
}
}
