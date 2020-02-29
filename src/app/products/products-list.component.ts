import { Component, OnInit, OnChanges } from '@angular/core'
import { ProductService } from './shared/product.service'
import { IProduct } from './shared/product.model'

@Component({
    selector: 'products-list',
    template: `
        <h2>
            Product List      
        </h2>
        <div class="col-md-7">
            <div class="btn-group btn-group-sm" style="margin-right: 30px;">
                <button class="btn btn-primary" [class.active]="sortBy==='name'" (click)="sortProducts('name')">By Name</button>
                <button class="btn btn-primary" [class.active]="sortBy==='price'" (click)="sortProducts('price')">By Price</button>
            </div>

            <div class="btn-group btn-group-sm">
                <button class="btn btn-primary" [class.active]="filterBy==='all'" (click)="filterProducts('all')">All</button>
                <button class="btn btn-primary" [class.active]="filterBy==='Electronics'" (click)="filterProducts('Electronics')">Electronics</button>
                <button class="btn btn-primary" [class.active]="filterBy==='Toys'" (click)="filterProducts('Toys')">Toys</button>
                <button class="btn btn-primary" [class.active]="filterBy==='Accessories'" (click)="filterProducts('Accessories')">Accessories</button>
            </div>
        </div>
        <br/><br/>
        <hr/>
        <div *ngFor="let productMain of products" class="col-md-5">
            <product-thumbnail [product]="productMain"></product-thumbnail>
        </div>
    `
})

export class ProductsListComponent implements OnInit {

    products:IProduct[]
    filterBy: string = 'all'
    sortBy: string = 'id'

    constructor(private productService: ProductService) {
        
    }

    ngOnInit() {
        this.productService.getProducts().subscribe((data) => {
            this.products = data
        })
    }

    filterProducts(filterBy:string) {
        this.filterBy = filterBy
        if (this.products) {
            this.products = this.productService.getProductsByCategory(this.filterBy)
        }
    }

    sortProducts(sortBy:string) {
        this.sortBy = sortBy
        if (this.products) {
            this.products = this.productService.sortProducts(this.sortBy)
        }
    }
}