import { Component, OnInit } from '@angular/core';
import { UserInfo } from 'src/app/user-info';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-user-overview',
  templateUrl: './user-overview.component.html',
  styleUrls: ['./user-overview.component.css']
})
export class UserOverviewComponent implements OnInit {

  userInfoList: UserInfo[] = [];
  constructor(private adminservice: AdminService) {}
  ngOnInit(): void {
    this.adminservice.getAllUsers()
    .subscribe(usersInfo => {
      this.userInfoList = usersInfo;
    })
  }
}
