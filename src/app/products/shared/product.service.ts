import { Injectable } from '@angular/core'
import { IProduct } from './product.model'

@Injectable()
export class ProductService {

    getProducts():IProduct[] {
        return PRODUCTS
    }

    getProduct(id:number):IProduct {
        return PRODUCTS.find(product => product.id === id)
    }
}

const PRODUCTS:IProduct[] = [
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