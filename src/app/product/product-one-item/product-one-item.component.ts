import { Component, Input, OnInit } from '@angular/core';
import { Iproduct } from 'src/app/interfaces/iproduct';
import { Iuser } from 'src/app/interfaces/iuser';
import { ProductserviceService } from 'src/app/services/productservice.service';
import { UserserviceService } from 'src/app/services/userservice.service';
@Component({
  selector: 'app-product-one-item',
  templateUrl: './product-one-item.component.html',
  styleUrls: ['./product-one-item.component.css']
})
export class ProductOneItemComponent implements OnInit {
  @Input() product: Iproduct;
  popup=false;
  constructor(private ProductserviceService: ProductserviceService, private UserserviceService:UserserviceService) { }

  ngOnInit(): void {
  }
  user:any;
  selectedProductId:any;
  addToCartClicked(id:number){
    //debugger;
    this.popup=true;
    localStorage.setItem("selectedProductId",id.toString() );
    this.user=localStorage.getItem("user");
    this.selectedProductId=localStorage.getItem("selectedProductId");

    this.UserserviceService.products.push(id);
    this.UserserviceService.products = [...new Set(this.UserserviceService.products)]
    console.log(localStorage.getItem("userid"));
    console.log(localStorage.getItem("selectedProductId"));
  }
  removeFromCart(id:number){
    debugger
    //const stringId=id.toString();
    this.user=localStorage.getItem("user");
    // this.selectedProductId=localStorage.getItem("selectedProductId");
    const index = this.UserserviceService.products.indexOf(id);
    if (index > -1) {
      this.UserserviceService.products.splice(index, 1);
    }
    
  }
}
