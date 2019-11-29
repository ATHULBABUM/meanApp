import { Component, OnInit } from '@angular/core';
import { IProduct } from '../productapp/product.model';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {

  constructor( private productmodel:ProductsService) { }

  productItem=new IProduct(null,null,null,null,null,null,null,null)

  ngOnInit() {
  }
  Prod(){
    this.productmodel.newproduct(this.productItem);
    alert("success");
  }

}
