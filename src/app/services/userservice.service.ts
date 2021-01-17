import { Injectable } from '@angular/core';
import { Iuser } from '../interfaces/iuser';
import app from 'firebase/app';
import{AngularFireAuth} from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { Iproduct } from '../interfaces/iproduct';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {

  users:Iuser[]=[];
  usersList:any;
  products:number[]=[];
  constructor(public firebaseAuth:AngularFireAuth, public AngularFirestore:AngularFirestore) { }

  async getusers(){
    debugger;
    // this.firebaseAuth.app.fire
    // let user = this.db.collection("users", ref => ref.where('email', '==', "xyz@gmail.com"));
this.usersList=this.AngularFirestore.collection("users");
    //  this.usersList=(await this.firebaseAuth.app).firestore().collection("users");
debugger;
console.log("usersList");
// var selecteduser=;
console.log(this.usersList);
    //user=app.firestore().collection("users").get({});
    //console.log();
      
  }
}
