import { Component, OnInit } from '@angular/core';
import { UserInfo } from 'src/app/user-info';
import { AdminService } from '../admin.service';
import { TableDirective } from 'src/app/table.directive';
import { group } from '@angular/animations';

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
  filterPipe(x: UserInfo)
  {
    return {
      'list-group-item-success': x.isAdmin == true,
      'list-group-item-danger': x.isAdmin == false
    }
  }
  toggleAdmin(x:number) {
    this.adminservice.toggleAdmin(this.userInfoList[x]);
  }
}
