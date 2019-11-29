import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductappComponent } from './productapp/productapp.component';
import { AddproductComponent } from './addproduct/addproduct.component';

const routes: Routes = [{path:"", component:ProductappComponent},
                        {path:"addproduct",component:AddproductComponent },
                    ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
