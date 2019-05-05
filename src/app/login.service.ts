import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private db: AngularFirestore) { }

  getUsersRef() {
    const collection = this.db.collection('users');
    return collection.ref;
  }

  async getTestUser() { // TODO: Replace this with a guarded / server-side function
    const user = await this.getUsersRef().where('name', '==', 'Victor Panayotov').get().then((snapshot) => {
      return snapshot.docs[0].ref;
    });
    return user;
  }
}
