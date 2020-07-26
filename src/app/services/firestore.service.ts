import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  constructor(
    private firestore: AngularFirestore
  ) { }

  public registryFilm(data) {
    return this.firestore.collection('films').add({...data});
  }
  
  public getFilm(documentId: string) {
    return this.firestore.collection('films').doc(documentId).snapshotChanges();
  }
 
  public getFilms() {
    return this.firestore.collection('films').snapshotChanges();
  }
 
  public updateFilms(documentId: string, data: any) {
    return this.firestore.collection('films').doc(documentId).set({...data});
  }

  public deleteFilms(documentId: string) {
    return this.firestore.collection('films').doc(documentId).delete();
  }
}
