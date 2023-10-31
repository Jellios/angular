import { Injectable } from '@angular/core';
import { Firestore, collectionData, collection, CollectionReference, Timestamp, addDoc, doc, setDoc, collectionGroup, query, where } from '@angular/fire/firestore';
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
      )
    );
  }
  
}
