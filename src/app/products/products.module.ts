import { NgModule } from '@angular/core';
import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products.component';
import { SharedModule } from '../shared/shared.module';
import { NavigationModule } from '../navigation/navigation.module';



@NgModule({
  declarations: [
    ProductsComponent
  ],
  imports: [
    SharedModule,
    ProductsRoutingModule,
    NavigationModule
  ]
})
export class ProductsModule { }
