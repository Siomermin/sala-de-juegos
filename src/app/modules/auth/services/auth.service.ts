import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { FirestoreService } from 'src/app/core/services/firestore.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(
    private afauth: AngularFireAuth,
    private firestore: FirestoreService
  ) {}

  async register(email: string, password: string) {
    try {
      return await this.afauth.createUserWithEmailAndPassword(email, password);
    } catch (error) {
      throw error;
    }
  }

  async login(email: string, password: string) {
    try {

      const res = await this.afauth.signInWithEmailAndPassword(email, password);
      if (res.user) {
        let date = new Date();
        const timestamp = new Date(date);

        this.firestore.save(
          {
            email: email,
            date: timestamp,
          },
          'loginLog'
        );
      }

      return res;

    } catch (error) {
      throw error;
    }
  }

  public isLoggedIn(): Promise<boolean> {
    return new Promise((resolve: any) => {
      this.afauth.onAuthStateChanged((user: any) => {
        user ? resolve(true) : resolve(false);
      });
    });
  }

  getLoggedUser() {
    return this.afauth.authState;
  }

  logout() {
    return this.afauth.signOut();
  }
}
