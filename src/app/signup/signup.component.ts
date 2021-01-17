import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FirebaseService } from '../services/firebase.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  isSignedin=false;
  constructor(private firebaseservice: FirebaseService ,private router: Router) { }

  ngOnInit(): void {
  }
  async onSignUp(email:string, password: string){
    await this.firebaseservice.signUp(email, password);
    if(this.firebaseservice.isLoggedIn==true){
      this.isSignedin=true;
      this.router.navigate(['authentication/signin']);
    }
  }

}
