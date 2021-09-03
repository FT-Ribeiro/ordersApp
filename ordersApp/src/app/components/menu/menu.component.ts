import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/model/product';
import { OrderService } from 'src/app/service/order.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.sass']
})
export class MenuComponent implements OnInit {

  productList: Product[];
  constructor(private os: OrderService) { }

  ngOnInit() {
    this.os.getMenu().subscribe(products => {
      this.productList = products.sort((a,b) => (a.category > b.category) ? 1 : ((b.category > a.category) ? -1 : 0))
    })
  }
  addToCart(product: Product){
    this.os.addToCart(product);
  }
  get cartLenght(){
    return this.os.getCartLength();
  }
  get cartPrice(){
    return this.os.getCartPrice();
  }
}
