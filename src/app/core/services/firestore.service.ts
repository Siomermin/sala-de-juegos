import { Injectable } from '@angular/core';
import { Firestore, addDoc, collection, collectionData, getDoc, getDocs, updateDoc } from '@angular/fire/firestore';


@Injectable({
  providedIn: 'root',
})
export class FirestoreService {
  constructor(private firestore: Firestore) {}

  save(data: any, path: string) {
    const col = collection(this.firestore, path);
    addDoc(col, data);
  }

}
