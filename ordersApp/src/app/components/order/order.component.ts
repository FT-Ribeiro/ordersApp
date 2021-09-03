import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OrderService } from 'src/app/service/order.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.sass']
})
export class OrderComponent implements OnInit {

  constructor(private os: OrderService, private router: Router) { }

  ngOnInit() {
  }
  get cartPrice(){
    return this.os.getCartPrice();
  }
  clearCart(){
    this.os.clearCart();
    this.router.navigate(['menu']);
  }
}
