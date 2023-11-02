import { Injectable, Query } from '@angular/core';
import { Firestore, collectionData, collection, CollectionReference, Timestamp, addDoc, doc, setDoc, collectionGroup, query, where, DocumentReference, updateDoc, deleteDoc } from '@angular/fire/firestore';
import { Observable, from } from 'rxjs';
import { AuthService } from '../auth/auth.service';
import { Router } from '@angular/router';
import { UserInfo } from '../user-info';
@Injectable({
  providedIn: 'root'
})
export class AdminService {

  userInfoList: UserInfo[] = [];




  constructor(private db: Firestore) { }

  getAllUsers(): Observable<UserInfo[]> {
   
    return collectionData<UserInfo>(
      query<UserInfo>(
        collection(this.db, 'users') as CollectionReference<UserInfo>
      ),
      {idField: 'id'}
    );
  }


  
}
