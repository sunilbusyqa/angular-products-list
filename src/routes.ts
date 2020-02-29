import { Routes } from '@angular/router'
import { ProductsListComponent } from "./app/products/products-list.component"
import { ProductDetailsComponent } from './app/products/product-details/product-details.component'
import { CreateProductComponent } from './app/products/create-product.component'
import { Error404Component } from './app/errors/404.component'
import { ProductRouteActivator } from './app/products/product-details/product-route-activator.service'
import { LoginComponent } from './user/login.component'
import { ProfileComponent } from './user/profile.component'

export const appRoutes:Routes = [
    { path: 'products/new', component: CreateProductComponent },
    { path: 'products', component: ProductsListComponent },
    { path: 'products/:id', component: ProductDetailsComponent, canActivate: [ProductRouteActivator] },
    { path: 'user/login', component: LoginComponent },
    { path: 'user/profile', component: ProfileComponent },
    { path: '404', component: Error404Component },
    { path: '', redirectTo: '/products', pathMatch: 'full' }
]