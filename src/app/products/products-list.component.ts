import { Component, OnInit } from '@angular/core'
import { ProductService } from './shared/product.service'
import { IProduct } from './shared/product.model'

@Component({
    selector: 'products-list',
    template: `
        <h2>
            Product List      
        </h2>
        <hr/>
        <div *ngFor="let productMain of products" class="col-md-5">
            <product-thumbnail [product]="productMain"></product-thumbnail>
        </div>
    `
})

export class ProductsListComponent implements OnInit {

    products:IProduct[]

    constructor(private productService: ProductService) {
        
    }

    ngOnInit() {
        this.products = this.productService.getProducts()
    }
}