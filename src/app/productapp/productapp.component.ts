import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { IProduct } from './product.model';
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-productapp',
  templateUrl: './productapp.component.html',
  styleUrls: ['./productapp.component.css']
})
export class ProductappComponent implements OnInit {

  constructor( public productObject:ProductsService) { }

  ngOnInit():void {
    this.productObject.prod()
    .subscribe((data)=>{
      this.products=JSON.parse(JSON.stringify(data));
    })

  }
 products:IProduct[];


flag:boolean;

buttonText:string="Show Image";
buttonClick(){
  if(this.flag==false){
    this.flag=true;
    this.buttonText="Hide Image";
  }else{
    this.flag=false;
    this.buttonText="Show Image"
    
  }
}
}
