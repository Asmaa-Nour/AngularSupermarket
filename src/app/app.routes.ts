import { RouterModule, Routes } from '@angular/router';
import { AuthenticationFormComponent } from './authentication-form/authentication-form.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MyProductsComponent } from './product/my-products/my-products.component';
import { ProductListingComponent } from './product/product-listing/product-listing.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
    { path: '', component: AuthenticationFormComponent },
    // { path: 'myproducts', component: MyProductsComponent },
    // { path: 'allProducts', component: AllProductsComponent },
    // { path: 'productListing', component: ProductListingComponent },
    { path: 'home', component: HomeComponent },
    // { path: 'authentication/signin', component: LoginComponent },
    // { path: 'authentication/register', component:  SignupComponent},
    // { path: 'authentication', component: AuthenticationFormComponent },
    {
        path: '',
        component: AuthenticationFormComponent,
        children: [
          {path: 'authentication/signin', component: LoginComponent}, 
          {path: 'authentication/register', component: SignupComponent}
        ]
      },
      {
        path: '',
        component: HomeComponent,
        children: [
          {path: 'home/productListing', component: ProductListingComponent}, 
          {path: 'home/myproducts', component: MyProductsComponent}
        ]
      },
];
export const routing = RouterModule.forRoot(routes);