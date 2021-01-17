import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FirebaseService } from '../services/firebase.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  isSignedin=false;
  constructor(private firebaseservice:FirebaseService,private router: Router) { }

  ngOnInit(): void {
    if( localStorage.getItem('user')!=null){
      this.isSignedin=true;
    }
    else{
      this.isSignedin=false;
    }
  }
  
  async signin(email:string, password: string){
    await this.firebaseservice.signIn(email, password);
    if(this.firebaseservice.isLoggedIn==true){
      this.isSignedin=true;
      this.router.navigate(['home/productListing']);
    }
    
  }
}
