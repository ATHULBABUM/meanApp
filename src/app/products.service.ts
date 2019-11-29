import { Injectable } from '@angular/core';
import { IProduct } from './productapp/product.model';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ProductsService {
 
  constructor( private http:HttpClient) { }
  

prod(){
 return (this.http.get('http://localhost:3000/products') );
}

newproduct(item){
  return this.http.post('http://localhost:3000/insert',{"product":item})
  .subscribe(data=>{console.log(data)})
}

}
