import { Component, OnInit } from '@angular/core';
import { Iproduct } from 'src/app/interfaces/iproduct';
import { ProductserviceService } from 'src/app/services/productservice.service';
import { UserserviceService } from 'src/app/services/userservice.service';

@Component({
  selector: 'app-my-products',
  templateUrl: './my-products.component.html',
  styleUrls: ['./my-products.component.css']
})
export class MyProductsComponent implements OnInit {
  productsCount:number=0;
  userProductsids:number[]=[];
  userProducts:Iproduct[];

  displayedProducts:Iproduct[]=[];
  constructor(private UserserviceService: UserserviceService, private ProductserviceService:ProductserviceService) { }

  p:any;
  ngOnInit(): void {
    // debugger;
    this.userProductsids=this.UserserviceService.products;
    this.userProducts=this.ProductserviceService.products;
    this.userProductsids.forEach(element => {
      this.p=this.userProducts.find(e => e.id==element);
      this.displayedProducts.push(this.p);
});
    // debugger;
this.productsCount=this.displayedProducts.length;
   
    
  }

}
