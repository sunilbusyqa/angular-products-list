import { Injectable } from '@angular/core'
import { IProduct } from './product.model'
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs'

@Injectable()
export class ProductService {

    constructor(private http:HttpClient) {

    }

    getProducts():Observable<IProduct[]> {
        return this.http.get<IProduct[]>("http://localhost:8080/v1/products")
    }

    getProductsByCategory(category:string):IProduct[] {
        if (category === 'all') {
            return PRODUCTS
        }
        return PRODUCTS.filter(product => product.category === category)
    }

    sortProducts(field:string):IProduct[] {
        var result = PRODUCTS.slice(0);
        return field === 'name' ? result.sort(this.sortByNameAsc) : result.sort(this.sortByPriceDesc)        
    }

    sortByNameAsc(a: IProduct, b: IProduct) {
        if (a.name > b.name) return 1
        else if (a.id < b.id) return -1
        else return 0
    }

    sortByPriceDesc(a: IProduct, b: IProduct) {
        if (a.price > b.price) return -1
        else if (a.price < b.price) return 1
        else return 0
    }

    getProduct(id:number):Observable<IProduct> {
        return this.http.get<IProduct>("http://localhost:8080/v1/products/" + id)
    }

    save(product:IProduct):Observable<any> {
        const httpOptions = {
            headers: new HttpHeaders({
              'Content-Type':  'application/json'
            })
          };
        return this.http.post("http://localhost:8080/v1/products", product, httpOptions)
    }
}

const PRODUCTS:IProduct[] = [
    {
        id: 1,
        name: 'iPhone XS',            
        description: 'Latest phone from Apple Inc.',
        price: 899.99,
        category: 'Electronics',
        imageUrl: 'https://cdn.shopify.com/s/files/1/1082/6288/products/ipx64_2c90c725-8487-4171-bb38-a7508d89658f_323x.jpg'
    },
    {
        id: 2,
        name: 'Microsoft Mouse',
        description: 'Laser mouse from Microsoft',
        price: 55,
        category: 'Electronics',
        imageUrl: 'https://cdn.cnetcontent.com/9d/8f/9d8fbfa4-18aa-4ecc-a6cb-9bee3caf53aa.jpg'
    },
    {
        id: 3,
        name: 'Adidas Fluid',
        description: 'New generation shoes from Adidas',
        price: 199,
        category: 'Accessories',
        imageUrl: 'https://assets.adidas.com/images/w_600,f_auto,q_auto:sensitive,fl_lossy/54c2506e53f1412bb447ab0b00c35843_9366/Fluidflow_Shoes_Grey_EG3667_01_standard.jpg'
    },
    {
        id: 4,
        name: 'Magic Egg',
        description: 'Egg that can hatch',
        price: 77,
        category: 'Toys',
        imageUrl: 'https://b.rgbimg.com/users/x/xy/xymonau/600/2dyXmUa.jpg'
    }
]