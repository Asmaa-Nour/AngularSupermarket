import { Injectable } from '@angular/core';
import { Iproduct } from '../interfaces/iproduct';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpResponse } from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class ProductserviceService {

  url="https://fakestoreapi.com/products";
 //products:any;
 products:Iproduct[]=[];
 
 getProducts():Observable<Iproduct[]> {
   //debugger;
  this.http.get<Iproduct[]>(this.url).subscribe(res => { this.products = res });
  console.log("inside service, products:")
  console.log(this.http.get<Iproduct[]>(this.url));
    return this.http.get<Iproduct[]>(this.url);
  }

  add(form:any): Observable<Iproduct> {
    var product: Iproduct;
    product = form.value;
    console.log(product);
    return this.http.post<Iproduct>(this.url, product);
  }

  public getProduct(id:number) {
  return this.products.find(product => product.id == id);
}
  delete(id: number){    
    //const urlForDelete:any = ${this.url}/${id};
    // const urlForDelete = ${this.url}/${id};
    // this.http.delete(urlForDelete).subscribe(
      this.http.delete(this.url).subscribe(
      (isSuccess)=>
      {
        if(isSuccess)
        { 
          //debugger;
          var i =this.products.findIndex(a=> a.id === id);
          this.products.splice(i,1);
        }
      },
      (error)=> {
        console.log('error happen');
      }
    );
  }
  edit(product:Iproduct): Observable<Iproduct> {
    // const url = ${this.url}/${product.id};
    // console.log(url);
    // return this.http.put<Iproduct>(url, product);
    return this.http.put<Iproduct>(this.url, product);
  }

  constructor(private http: HttpClient) {
     this.getProducts();
    
  }
}
