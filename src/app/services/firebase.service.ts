import { Injectable } from '@angular/core';
import app from 'firebase/app';
import{AngularFireAuth} from '@angular/fire/auth';
@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  isLoggedIn=false;
  constructor(public firebaseAuth:AngularFireAuth) { }
  async signIn(email: string , password: string){
    this.firebaseAuth.signInWithEmailAndPassword(email, password)
    .then(res=>{
      console.log(res.user);
      
      this.isLoggedIn=true;
      localStorage.setItem("user", JSON.stringify( res.user));
      localStorage.setItem("userid", JSON.stringify( res.user?.uid));
    });
  }

  async signUp(email: string , password: string){
    //this.firebaseAuth.createUserWithEmailAndPassword(email, password)
    this.firebaseAuth.createUserWithEmailAndPassword(email, password)
    .then(res=>{
      this.isLoggedIn=true;
      localStorage.setItem("user", JSON.stringify( res.user));
      localStorage.setItem("userid", JSON.stringify( res.user?.uid));

      app.firestore().collection("users")
      .add({
        uid: '1',
      })
    });
  }

  signOut(){
    this.firebaseAuth.signOut();
    localStorage.removeItem("user");
  }
}
