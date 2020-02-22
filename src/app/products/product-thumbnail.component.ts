import { Component, Input} from '@angular/core'

@Component({
    selector: 'product-thumbnail',
    template: `
        <div class="well hover-well thumbnail">
            <div>{{product.name}}</div>
            <div>{{product.description}}</div>
            <div>\${{product.price}}</div>
            <div>{{product.category}}</div>
        </div>
    `
})

export class ProductThumbnailComponent {

    @Input() product:any

    checkPrice(product) {
        if (product.price > 200) {
            return true
        }
        return false
    }
}