import { Routes } from '@angular/router'
import { ProductsListComponent } from "./app/products/products-list.component"
import { ProductDetailsComponent } from './app/products/product-details/product-details.component'
import { CreateProductComponent } from './app/products/create-product.component'
import { Error404Component } from './app/errors/404.component'
import { ProductRouteActivator } from './app/products/product-details/product-route-activator.service'

export const appRoutes:Routes = [
    { path: 'products/new', component: CreateProductComponent, canDeactivate: ['canDeactivateCreateEvent'] },
    { path: 'products', component: ProductsListComponent },
    { path: 'products/:id', component: ProductDetailsComponent, canActivate: [ProductRouteActivator] },
    { path: '404', component: Error404Component },
    { path: '', redirectTo: '/products', pathMatch: 'full' }
]