import { Injectable } from '@angular/core';
import { Firestore, collectionData, collection, CollectionReference, Timestamp, addDoc, doc, setDoc, collectionGroup, query, where, DocumentReference, updateDoc } from '@angular/fire/firestore';
import { Observable, from } from 'rxjs';
import { Timer } from './timers/timer';
import { AuthService } from './auth/auth.service';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class BackendService {

  constructor(private db: Firestore, private _authService: AuthService, private router: Router  ) { }

  getAllTimers(): Observable<Timer[]> {
    const user = this._authService.getCurrentUser();
    if (!user || !user.uid) {
      //this.router.navigate(['auth/login']);
      return new Observable<Timer[]>(); // Return an empty observable or handle this case accordingly
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
      timer.userID = user.uid; // Set the user ID as the timer's ID
      const timersCollection = collection(this.db, 'timers');
      return from(addDoc(timersCollection, timer));
    } else {
      // Handle the case where the user ID is not available in localStorage
      // You can return an error or take an appropriate action.
      return /* Return an observable with an error or a specific value */;
    }
  }
  
}
