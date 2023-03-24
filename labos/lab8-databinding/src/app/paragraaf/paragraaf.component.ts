import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-paragraaf',
  templateUrl: './paragraaf.component.html',
  styleUrls: ['./paragraaf.component.css']
})
export class ParagraafComponent implements OnInit {

  tekst:string = "";
  ngOnInit(): void {

  }
  constructor() {}
}
