import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductappComponent } from './productapp/productapp.component';
import { AddproductComponent } from './addproduct/addproduct.component';
import { HeaderComponent } from './header/header.component';

import { HttpClientModule } from '@angular/common/http'; //imported for http request 

import { FormsModule } from '@angular/forms'

@NgModule({
  declarations: [
    AppComponent,
    ProductappComponent,
    AddproductComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
