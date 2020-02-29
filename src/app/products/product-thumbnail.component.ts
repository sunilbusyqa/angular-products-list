import { Component, Input} from '@angular/core'
import { IProduct } from './shared/product.model'

@Component({
    selector: 'product-thumbnail',
    template: `
        <div [routerLink]="['/products', product.id]" class="well hover-well thumbnail">
            <div>{{product.name | uppercase}}</div>
            <div>{{product.description}}</div>
            <div [ngClass]="{ green : product.price <= 100, orange: product.price > 100 && product.price <= 200, red: product.price > 200}">{{product.price | price}}</div>
            <div>{{product.category}}</div>
        </div>
    `,
    styles: [`
        .green { color: green; }
        .orange { color: orange; }
        .red { color: red; }
    `]
})

export class ProductThumbnailComponent {

    @Input() product:IProduct
}