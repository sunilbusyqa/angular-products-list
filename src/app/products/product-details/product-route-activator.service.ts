import { CanActivate, ActivatedRouteSnapshot, Router } from '@angular/router'
import { Injectable } from '@angular/core'
import { ProductService } from '../shared/product.service'

@Injectable()
export class ProductRouteActivator implements CanActivate {

    constructor(private productService:ProductService, private router: Router) {

    }

    canActivate(route:ActivatedRouteSnapshot) {
        const productExists = this.productService.getProduct(+route.params['id'])
        if (!productExists) {
            this.router.navigate(['/404'])
        }
        return productExists != undefined
    }
}