import { Injectable } from '@angular/core';
import { Firestore, collectionData, collection, CollectionReference, doc, setDoc, query, where } from '@angular/fire/firestore';
import { Observable, Subject } from 'rxjs';
import { Router } from '@angular/router';
import { Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from '@angular/fire/auth';
import { UserInfo } from '../user-info';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isAdmin = new Subject<boolean>();
  userInfo: UserInfo = {
    email: '',
    id: '',
    isAdmin: false
  };
  token: string | null = null;
  currentUserID: string = '';

  constructor(private router: Router, private auth: Auth, private db: Firestore) {
    if (localStorage.getItem('token')) {
      this.token = localStorage.getItem('token');
    }
  }

  signup(email: string, password: string): Promise<string> {
    return createUserWithEmailAndPassword(this.auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        this.createUser(email, user.uid);
        return 'success';
      })
      .catch((error) => {
        console.error('Error during signup:', error);
        return error.message || 'An error occurred during signup.';
      });
  }

  login(email: string, password: string) {
    return signInWithEmailAndPassword(this.auth, email, password)
      .then(() => {
        this.auth.currentUser?.getIdToken()
          .then((token: string) => {
            this.token = token;
            localStorage.setItem('token', token);
            this.userInfo.id = this.auth.currentUser?.uid || '';
            if (this.auth.currentUser) {
              this.currentUserID = this.auth.currentUser.uid;
              this.getUserFields(this.auth.currentUser.uid).subscribe((tmpUserInfo: UserInfo[]) => {
                if (tmpUserInfo && tmpUserInfo.length > 0) {
                  this.userInfo.email = tmpUserInfo[0].email;
                  this.userInfo.isAdmin = tmpUserInfo[0].isAdmin;
                  this.checkAdmin(this.userInfo.isAdmin);
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

  logout(): void {
    this.auth.signOut();
    this.token = null;
    localStorage.removeItem('token');
    this.router.navigate(['auth/login']);
  }

  isLoggedIn(): boolean {
    return this.token != null;
  }

  getUserFields(id: string | null): Observable<UserInfo[]> {
    return collectionData<UserInfo>(
      query<UserInfo>(
        collection(this.db, 'users') as CollectionReference<UserInfo>,
        where("userID", "==", id)
      ),
      { idField: 'id' }
    );
  }

  createUser(email: string, customID: string) {
    const newID = doc(collection(this.db, 'id')).id;
    const ref = doc(this.db, 'users/' + newID);
    setDoc(ref, { 'userID': customID, 'email': email, 'isAdmin': false });
  }

  checkAdmin(x: boolean) {
    this.isAdmin.next(x);
  }

  getCurrentUser() {
    return this.auth.currentUser || null;
  }

  getCurrentUserId(): string | null {
    return this.auth.currentUser?.uid || null;
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
  
  
}
