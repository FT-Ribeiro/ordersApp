import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { OrderIten } from "../model/orderIten";
import { Product } from "../model/product";


const baseUrl = environment.backendBaseUrl;
@Injectable({
    providedIn: 'root'
})

export class OrderService{
    constructor(private http: HttpClient){ }

    shoppingCart: OrderIten[] = [];

    getMenu(){
        return this.http.get<Product[]>(`${baseUrl}/menu?_sort=description`);
    }

    addToCart(product: Product){
        const item = this.shoppingCart.find(item=> item.product.description === product.description);
        if(item){
            item.count++;
        }
        else{
            this.shoppingCart.push({
                product: product,
                count: 1
            });
        }
    }
}