import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProductOneItemComponent } from './product/product-one-item/product-one-item.component';
import { ProductListingComponent } from './product/product-listing/product-listing.component';
import { ProductEditComponent } from './product/product-edit/product-edit.component';
import { ProductAddComponent } from './product/product-add/product-add.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './angular-material-module/angular-material-module.module';
import { ProductserviceService } from './services/productservice.service';
//import { HttpClient, HttpResponse } from '@angular/common/http'
import { HttpClientModule } from '@angular/common/http';
import { CardComponent } from './card/card.component';
//import { AlertModule } from 'ngx-bootstrap';
import { routing } from './app.routes';
import { MyProductsComponent } from './product/my-products/my-products.component';
import { RouterModule } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { LoginComponent } from './login/login.component';
import{AngularFireModule} from '@angular/fire'
import { FirebaseService } from './services/firebase.service';
import { SignupComponent } from './signup/signup.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AuthenticationFormComponent } from './authentication-form/authentication-form.component';
import { FlexLayoutModule } from '@angular/flex-layout';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductOneItemComponent,
    ProductListingComponent,
    ProductEditComponent,
    ProductAddComponent,
    CardComponent,
    MyProductsComponent,
    MenuComponent,
    LoginComponent,
    SignupComponent,
    AuthenticationFormComponent
  ],
  imports: [
    FlexLayoutModule ,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    AngularFireModule.initializeApp(
      {
        apiKey: "AIzaSyCj9I6v1j2SUWD4J4IRt1aekBl_40zKfks",
    authDomain: "project1-92f63.firebaseapp.com",
    projectId: "project1-92f63",
    storageBucket: "project1-92f63.appspot.com",
    messagingSenderId: "175133783055",
    appId: "1:175133783055:web:8df66c6cee5a84037c5f7a"
      }),
    BrowserModule,
    RouterModule,
    routing,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    HttpClientModule,
    //HttpClient,
    //HttpResponse
  ],
  providers: [
    ProductserviceService,
    FirebaseService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
