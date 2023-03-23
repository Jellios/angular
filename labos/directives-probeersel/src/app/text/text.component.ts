import { Component, OnInit } from '@angular/core';
import { TextInterface } from '../text-interface';

@Component({
  selector: 'app-text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.css']
})
export class TextComponent implements OnInit {
  texts: TextInterface = {
    id: 1,
    text: 'Hallo'
  };
constructor() {}
ngOnInit(): void {

}
}
