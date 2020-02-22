import { Component } from "@angular/core";
import { Router } from '@angular/router';

@Component({
    templateUrl: './create-product.component.html'
})

export class CreateProductComponent {

    isDirty:boolean = true
    constructor(private router:Router) {

    }

    cancel() {
        this.router.navigate(['/products'])
    }
}