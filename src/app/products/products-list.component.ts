import { Component } from '@angular/core'

@Component({
    selector: 'products-list',
    template: `
        <h2>
            Product List      
        </h2>
        <hr/>
    
        <div *ngFor="let productMain of products">
            <product-thumbnail [product]="productMain"></product-thumbnail>
        </div>
    `
})

export class ProductsListComponent {

    products:any = [
        {
            id: 1,
            name: 'iPhone XS',            
            description: 'Latest phone from Apple Inc.',
            price: 899.99,
            category: 'Electronics'
        },
        {
            id: 2,
            name: 'Microsoft Mouse',
            description: 'Laser mouse from Microsoft',
            price: 55,
            category: 'Electronics'
        },
        {
            id: 3,
            name: 'Adidas Fluid',
            description: 'New generation shoes from Adidas',
            price: 199,
            category: 'Accessories'
        },
        {
            id: 4,
            name: 'Magic Egg',
            description: 'Egg that can hatch',
            price: 77,
            category: 'Toys'
        }
    ]

    showMessage(data) {
        console.log(data)
    }
}