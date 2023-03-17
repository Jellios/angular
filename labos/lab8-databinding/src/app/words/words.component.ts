import { Component, OnInit } from '@angular/core';
import { Word } from '../word';

@Component({
  selector: 'app-words',
  templateUrl: './words.component.html',
  styleUrls: ['./words.component.css']
})
export class WordsComponent implements OnInit {
  zin: string = "";
  word: Word = {
    id: 1,
    woord: ""
  }
  constructor() {}
ngOnInit(): void {

}
onAddWord(): void {
this.zin += this.word.woord;
}
}
