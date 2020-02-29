import { Component } from "@angular/core";
import { ProductService } from '../shared/product.service';
import { ActivatedRoute } from '@angular/router';
import { IProduct } from '../shared/product.model';

@Component({
    templateUrl: './product-details.component.html',
    styles: [`
        .container { padding-left: 20px; padding-right: 20px; },
        .productimage { height: 100px; }
    `]
})

export class ProductDetailsComponent {

    product:IProduct

    constructor(private productService: ProductService, private route:ActivatedRoute) {
        
    }

    ngOnInit() {
        this.productService.getProduct(+this.route.snapshot.params['id'])
        .subscribe((data) => {
            this.product = data
        }, (error) => {
            console.log(error)
        })
    }
}