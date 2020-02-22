import { Component } from "@angular/core";
import { ProductService } from '../shared/product.service';
import { ActivatedRoute } from '@angular/router';

@Component({
    templateUrl: './product-details.component.html',
    styles: [`
        .container { padding-left: 20px; padding-right: 20px; },
        .event-image { height: 100px; }
    `]
})

export class ProductDetailsComponent {

    product:any

    constructor(private productService: ProductService, private route:ActivatedRoute) {
        
    }

    ngOnInit() {
        this.product = this.productService.getProduct(+this.route.snapshot.params['id'])
    }
}