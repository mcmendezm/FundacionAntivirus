import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(public afAuth: AngularFireAuth) { }

  // Método para iniciar sesión con Google
  async signInWithGoogle() {
    try {
      const provider = new firebase.auth.GoogleAuthProvider();
      await this.afAuth.signInWithPopup(provider);
    } catch (error) {
      console.error('Error signing in with Google:', error);
    }
  }

  // Método para iniciar sesión con Facebook
  async signInWithFacebook() {
    try {
      const provider = new firebase.auth.FacebookAuthProvider();
      await this.afAuth.signInWithPopup(provider);
    } catch (error) {
      console.error('Error signing in with Facebook:', error);
    }
  }

  // Método para cerrar sesión
  async signOut() {
    try {
      await this.afAuth.signOut();
    } catch (error) {
      console.error('Error signing out:', error);
    }
  }
}

