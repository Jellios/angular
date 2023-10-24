import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { User } from '../user.model';

@Component({
  selector: 'app-list-of-users',
  templateUrl: './list-of-users.component.html',
  styleUrls: ['./list-of-users.component.css']
})
export class ListOfUsersComponent implements OnInit {

  users: User[] = [];
  valid: boolean = true;
  errorMessage: string = "";
  defaultUser = {name: 'student', age: 20};
  userData!: Promise<{name:string,age:number}[]>;
  constructor(private dataService: DataService) {
   
   }

 /* ngOnInit(): void {
    this.dataService.readData()
    .then (
      (userData) => {
        this.users = userData;
        this.valid = true;
      } ,
      (err) => this.errorMessage = err,
      
  );
   } */
   ngOnInit(): void {
    this.userData = this.dataService.getUserData();
   }

}
