import { Injectable } from '@angular/core';
import { Firestore, collectionData, collection,CollectionReference, doc, setDoc, addDoc, query, where} from '@angular/fire/firestore';
import {Observable, map,of,from} from 'rxjs';
import { Router } from '@angular/router';
import {Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword} from '@angular/fire/auth'
import {  AsyncValidatorFn, FormArray, FormControl, FormGroup, ValidationErrors } from '@angular/forms';
import { UserInfo } from '../user-info';


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

  token: string| null = null;

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
  return signInWithEmailAndPassword(this.auth,email,passwd)
  .then( () => {
    return this.auth.currentUser?.getIdToken()
    .then(
      (token: string) => {
        this.token = token;
        localStorage.setItem('token',token);
        
        return true;
      }
    );
  })
  .catch(
    error => {
      console.log(error);
      return false;      
    }
  );
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

isAdmin(): Observable<boolean> {
  const tmpUser = this.getCurrentUser();
  if (tmpUser) {
    const id = tmpUser.uid;
    return this.getUserFields(id).pipe(
      map((userInfos: UserInfo[]) => {
        if (userInfos.length > 0) {
          return userInfos[0].isAdmin || false;
        } else {
          return false;
        }
      })
    );
  } else {
    return of(false);
  }
}

  getUserFields(id:string): Observable<UserInfo[]>{
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


getCurrentUser() {
  
  if (this.auth.currentUser) {
    
    return this.auth.currentUser;
  } else {
    return null;
  }
}
}

