import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProductsListComponent } from './products/products-list.component'
import { ProductThumbnailComponent } from './products/product-thumbnail.component';
import { NavbarComponent } from './nav/navbar.component';
import { ProductService } from './products/shared/product.service';
import { ProductDetailsComponent } from './products/product-details/product-details.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from 'src/routes';
import { CreateProductComponent } from './products/create-product.component';
import { Error404Component } from './errors/404.component';
import { ProductRouteActivator } from './products/product-details/product-route-activator.service';
import { LoginComponent } from 'src/user/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from 'src/user/auth.service';
import { ProfileComponent } from 'src/user/profile.component';
import { PricePipe } from './products/shared/price.pipe';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ProductsListComponent,
    ProductThumbnailComponent,
    NavbarComponent,
    ProductDetailsComponent,
    CreateProductComponent,
    Error404Component,
    LoginComponent,
    ProfileComponent,
    PricePipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    ProductService,
    ProductRouteActivator,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
