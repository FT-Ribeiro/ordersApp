import { registerLocaleData } from '@angular/common';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MenuComponent } from './components/menu/menu.component';
import { OrderComponent } from './components/order/order.component';
import localePt from '@angular/common/locales/pt';

registerLocaleData(localePt);

const routes: Routes = [
  {path: 'menu', component: MenuComponent},
  {path: 'order', component: OrderComponent},
  {path: '', redirectTo: 'menu', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
