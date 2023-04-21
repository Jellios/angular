import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {
  username:string = "";
  password:string = "";
ngOnInit(): void {

}
onPressButton(): void {

}
}
