import { Component, OnInit } from '@angular/core';
import { UserInfo } from 'src/app/user-info';
import { AdminService } from '../admin.service';
import { TableDirective } from 'src/app/table.directive';
import { group } from '@angular/animations';
import { AbstractControl, NgForm } from '@angular/forms';

@Component({
  selector: 'app-user-overview',
  templateUrl: './user-overview.component.html',
  styleUrls: ['./user-overview.component.css']
})
export class UserOverviewComponent implements OnInit {

  userInfoList: UserInfo[] = [];
  selectedFile: File | null = null;

  constructor(private adminservice: AdminService) {}

  ngOnInit(): void {
    this.adminservice.getAllUsers()
      .subscribe(usersInfo => {
        this.userInfoList = usersInfo;
      });
  }

  filterPipe(x: UserInfo) {
    return {
      'list-group-item-success': x.isAdmin == true,
      'list-group-item-danger': x.isAdmin == false
    };
  }

  toggleAdmin(x: number) {
    this.adminservice.toggleAdmin(this.userInfoList[x]);
  }
/*
  onFileChange(event: Event): void {
  const target = event.target as HTMLInputElement;

  if (target.files && target.files[0]) {
    this.selectedFile = target.files[0];
   let extent:string = this.getFileExtension(this.selectedFile.name);
 //  console.log("extent: " +extent);
 if (extent != "png")
 {
  
 }
 else
 {
  
 }
  }
  }

  onSubmit(form: NgForm): void {
    if (form.valid && this.selectedFile) {
      // Handle file upload here
      console.log('Uploading file:', this.selectedFile.name);
      
    }
  }
  
  getFileExtension(filename: string): string {
    const parts = filename.split('.');
    if (parts.length > 1) {
      return parts.pop() || ''; // Use an empty string as a default
    } else {
      return ''; // No extension found
    }
  }
  */
}
  
  

