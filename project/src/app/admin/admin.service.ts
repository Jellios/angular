import { Injectable, Query } from '@angular/core';
import { Firestore, collectionData, collection, CollectionReference, Timestamp, addDoc, doc, setDoc, collectionGroup, query, where, DocumentReference, updateDoc, deleteDoc } from '@angular/fire/firestore';
import { Observable, from } from 'rxjs';
import { AuthService } from '../auth/auth.service';
import { Router } from '@angular/router';
import { UserInfo } from '../user-info';
import {getDownloadURL, ref, Storage, uploadBytesResumable} from '@angular/fire/storage'
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
  toggleAdmin(x: UserInfo) {
    if (x.isAdmin){
      x.isAdmin = false;
    }
    else{
      x.isAdmin = true;
    }
    const userRef = doc(this.db, 'users/'+x.id) as DocumentReference<UserInfo>;
    return from(updateDoc(userRef,x));
  }
/*
  async uploadImg(path:string, file:File): Promise<string> {
    const storageRef = ref(this.storage, path);
    const task = uploadBytesResumable(storageRef, file);
    await task;
    const url = await getDownloadURL(storageRef);
    return url;
  } */
}
