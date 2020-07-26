import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {
  private subject = new Subject<any>();

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

  sendMessage(message: any) {
    this.subject.next(message);
  }

  getMessage(): Observable<any> {
    return this.subject.asObservable();
  }
}
