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

@NgModule({
  declarations: [
    AppComponent,
    ProductsListComponent,
    ProductThumbnailComponent,
    NavbarComponent,
    ProductDetailsComponent,
    CreateProductComponent,
    Error404Component
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    ProductService,
    ProductRouteActivator,
    {
      provide: 'canDeactivateCreateEvent',
      useValue: checkDirtyState
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function checkDirtyState(component:CreateProductComponent) {
  if (component.isDirty) {
    return window.confirm('You have not saved this event, do you really want to cancel?')
  }
  return true
}
