import { Injectable } from '@angular/core';
import { Firestore, collectionData, collection,CollectionReference, doc, setDoc, addDoc, query, where} from '@angular/fire/firestore';
import {Observable, map,of,from, Subject} from 'rxjs';
import { Router } from '@angular/router';
import {Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword} from '@angular/fire/auth'
import {  AsyncValidatorFn, FormArray, FormControl, FormGroup, ValidationErrors } from '@angular/forms';
import { UserInfo } from '../user-info';
import { BackendService } from '../backend.service';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router:Router,private auth: Auth, private db: Firestore ) { 

    if (localStorage.getItem('token')) {
      this.token = localStorage.getItem('token');
     
    }
    console.log("logged in: "+ localStorage.getItem('token')); 
  }

  userInfo: UserInfo = {
    email: '',
    id: '',
    isAdmin: false
  }
  token: string| null = null;

isAdmin = new Subject<boolean>();

 signup(email: string, passwd: string): Promise<string> {
    return createUserWithEmailAndPassword(this.auth, email, passwd)
      .then((userCredential) => {
        const user = userCredential.user['uid'];
        const userString = JSON.stringify(user);
       // console.log(user);
      // this.backendservice.createUser(email, user);
      this.createUser(email, userString);
        return 'success';
      })
      .catch((error) => {
        console.error('Error during signup:', error);
        return error.message || 'An error occurred during signup.';
      });
    } 

    /*async signup(email: string, passwd: string): Promise<string> {
      try {
        const userCredential = await createUserWithEmailAndPassword(this.auth, email, passwd);
        const user = userCredential.user;
        const userString = JSON.stringify(user);
        this.createUser(email, userString);
        return 'success';
      } catch (error: any) {
        console.error('Error during signup:', error);
        return error.message || 'An error occurred during signup.';
      }
    } */
    login(email: string, passwd: string) {
      return signInWithEmailAndPassword(this.auth, email, passwd)
        .then(() => {
          this.auth.currentUser?.getIdToken()
            .then((token: string) => {
              this.token = token;
              localStorage.setItem('token', token);
              this.userInfo.id = this.auth.currentUser?.uid || '';
              console.log('Logged in user ID:', this.userInfo.id);
              if (this.auth.currentUser != null) {
                this.getUserFields(this.auth.currentUser.uid).subscribe((tmpUserInfo: UserInfo[]) => {
                  if (tmpUserInfo && tmpUserInfo.length > 0) {
                    this.userInfo.email = tmpUserInfo[0].email;
                    this.userInfo.isAdmin = tmpUserInfo[0].isAdmin;
                    console.log('User Info:', this.userInfo);
                  }
                });
              }
            });
          return true;
        })
        .catch(error => {
          console.log(error);
          return false;
        });
    }
    
logout():void {
  this.auth.signOut();
  this.token = null;
  localStorage.removeItem('token');
  this.router.navigate(['auth/login']);

}
isLoggedIn(): boolean {
  return this.token != null;
}



  getUserFields(id:string|null): Observable<UserInfo[]>{
    return collectionData<UserInfo>(
      query<UserInfo>(
        collection(this.db, 'users') as CollectionReference<UserInfo>,
        where("userID", "==" ,id)
      ),
      {idField: 'id'}
    );
  }
paswordsMatch(fgp: FormGroup): Promise<any> |Observable<any> {
  const answer = new  Promise<any>((resolve,reject) => {
    console.log(fgp);
    if (fgp.controls['passwd'].value == fgp.controls['passwd2'].value)
    {
      console.log("passwords match");
      let regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
      if(regex.test(fgp.controls['passwd'].value))
      {
        // If password passes regex test, resolve the promise
        console.log("password is strong");
        resolve(null);
      }
      else 
      {
        // If password fails regex test, resolve the promise with an error
        console.log("password is not strong");
        resolve({'passwordNotStrong':true});
      }
      
    }
    else
    {
      console.log("passwords do not match");
     
      resolve({'passwordsNotMatch':true});
    }
  });
  return answer;
}


createUser(email:string,customID: string) {
const newID = doc(collection(this.db, 'id')).id;
const ref = doc(this.db, 'users/'+newID);
return from(setDoc(ref, {'userID':customID, 'email':email, 'isAdmin': false})); 

}

checkAdmin(x: boolean) {
  this.isAdmin.next(x);
}
getCurrentUser() {
  
  if (this.auth.currentUser) {
    
    return this.auth.currentUser;
  } else {
    return null;
  }
}
}

