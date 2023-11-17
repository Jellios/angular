import { Injectable } from '@angular/core';
import { Firestore, collectionData, collection, CollectionReference, Timestamp, addDoc, doc, setDoc, collectionGroup, query, where, DocumentReference, updateDoc, deleteDoc, orderBy } from '@angular/fire/firestore';
import { Observable, from,map } from 'rxjs';
import { Timer } from './timers/timer';
import { AuthService } from './auth/auth.service';
import { Router } from '@angular/router';
import { UserInfo } from './user-info';
import { idToken, user } from 'rxfire/auth';



@Injectable({
  providedIn: 'root'
})
export class BackendService {

  constructor(private db: Firestore, private _authService: AuthService, private router: Router  ) { }

  getAllTimers(): Observable<Timer[]> {
    const user = this._authService.getCurrentUser();
    if (!user || !user.uid) {
    
      return new Observable<Timer[]>(); 
    }
   
    const userID = user.uid;
    return collectionData<Timer>(
      query<Timer>(
        collection(this.db, 'timers') as CollectionReference<Timer>,
        where("userID", "==", userID)
      ),
      {idField: 'id'}
    );
  }
  
  
  updateTimer(title: string, description: string, startDate: Timestamp, id: string){
    const timerRef = doc(this.db,'timers/'+id) as DocumentReference<Timer>;
    return from(updateDoc(timerRef, {'title': title, 'description': description, 'startDate': startDate}));
  }
  addTimer(timer: Timer) {
    const user = this._authService.getCurrentUser();
    if (user?.uid) {
      timer.userID = user.uid; 
      const timersCollection = collection(this.db, 'timers');
      return from(addDoc(timersCollection, timer));
    } else {
     
      return ;
    }
  }
  deleteTimer(id:string) {
    const timerRef = doc(this.db, 'timers/'+id) as DocumentReference<Timer>;
    return from(deleteDoc(timerRef));
  }

  getCurrentUserInfo(): Observable<UserInfo[]> {
   
    const usr = this._authService.getCurrentUser();
    let id:String = '';
    if (usr != null)
    {
      id = usr.uid;
      console.log("test");
    }
    return collectionData<UserInfo>(
      query<UserInfo>(
        collection(this.db, 'users') as CollectionReference<UserInfo>,
        where('userID', '==', id)
      ),
      {idField: 'id'}
    );
  }
}
