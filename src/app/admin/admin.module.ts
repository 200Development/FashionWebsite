import { NgModule } from '@angular/core';
import { AdminComponent } from './admin.component';
import { AdminRoutingModule } from './admin-routing.module';
import { SharedModule } from '../shared/shared.module';
import { NavigationModule } from '../navigation/navigation.module';
import { MetricsModule } from '../metrics/metrics.module';



@NgModule({
  declarations: [
    AdminComponent
  ],
  imports: [
    SharedModule,
    AdminRoutingModule,
    NavigationModule,
    MetricsModule
  ],
  exports: [
    AdminComponent
  ]
})
export class AdminModule { }
