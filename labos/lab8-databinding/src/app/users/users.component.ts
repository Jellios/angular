import { Component, OnInit } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  btnEnabled: boolean = false;
  constructor() {};
user: User = {
  userID :1,
  userName: 'jelle'
}
ngOnInit(): void {
}
onByeBye(): void {
this.user.userName = "";
}
check(): boolean {
  if (this.user.userName == "")
  {
    return true;
  }
  else
  {
    return false;
  }
}
}
