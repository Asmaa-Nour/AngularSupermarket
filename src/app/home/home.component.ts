import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ProductserviceService } from '../services/productservice.service';
//import {RouterModule} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  popup=false;
  @Output() isLoggedOut=new EventEmitter<void>();
  // public filebaseService:FirebaseService,
  constructor( public ProductService:ProductserviceService) { }

  ngOnInit(): void {
    this.consoleProducts();
  }
  logOut(){
    // this.filebaseService.signOut();
    // this.isLoggedOut.emit();
  }
  consoleProducts(){
    console.log( "products list:");
    console.log( this.ProductService.getProducts());
  }
  checkoutClicked(){
    
  }
}
