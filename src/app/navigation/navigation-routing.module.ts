import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { AdminComponent } from '../admin/admin.component';
import { ProductsComponent } from '../products/products.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [],
  imports: [
    SharedModule,
    RouterModule.forChild([
      { path: 'home', component: HomeComponent },
      { path: 'admin', component: AdminComponent },
      { path: 'products', component: ProductsComponent }
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class NavigationRoutingModule { }
