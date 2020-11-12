import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminModule } from './admin/admin.module';
import { ProductsModule } from './products/products.module';
import { SharedModule } from './shared/shared.module';
import { HomeModule } from './home/home.module';
import { NavigationModule } from './navigation/navigation.module';
import { MetricsModule } from './metrics/metrics.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    SharedModule,
    NavigationModule,
    HomeModule,
    AdminModule,
    ProductsModule,
    AppRoutingModule,
    MetricsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
