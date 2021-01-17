import { Component, OnInit } from '@angular/core';
import { Iproduct } from 'src/app/interfaces/iproduct';
import {ProductserviceService} from 'src/app/services/productservice.service';
@Component({
  selector: 'app-product-listing',
  templateUrl: './product-listing.component.html',
  styleUrls: ['./product-listing.component.css']
})
export class ProductListingComponent implements OnInit {
  products: Iproduct[];
  product: Iproduct;
  getProducts(): any {

    this.ProductserviceService.getProducts().subscribe(res => {
      this.ProductserviceService.products = res;
      //debugger;
      this.ProductserviceService.products.forEach(element => {
        //debugger;
        element.smallDescription=element.description
        // element.smallDescription=element.description.substring(0,40);
        element.smallTitle=element.title.substring(0,20);
        
      });
      this.products=this.ProductserviceService.products;
    });
  }
  
  constructor(private ProductserviceService: ProductserviceService) { }
  ngOnInit() {
    this.getProducts();
  }
  checkoutClicked(){
    
  }
}
