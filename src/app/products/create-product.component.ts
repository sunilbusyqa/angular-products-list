import { Component } from "@angular/core";
import { Router } from '@angular/router';
import { IProduct } from './shared/product.model';
import { AuthService } from 'src/user/auth.service';
import { ProductService } from './shared/product.service';

@Component({
    templateUrl: './create-product.component.html'
})

export class CreateProductComponent {

    constructor(private productService:ProductService, private router:Router) {

    }

    saveProduct(formValues) {
        let product:IProduct = {
            name: formValues.name,
            description: formValues.description,
            price: formValues.price,
            category: formValues.category,
            imageUrl: formValues.imageUrl
        }
        this.productService.save(product).subscribe(() => {
            this.router.navigate(['/products'])
        })
    }

    cancel() {
        this.router.navigate(['/products'])
    }
}