import { NgModule } from '@angular/core';
import { SalesGraphComponent } from './sales-graph/sales-graph.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    SalesGraphComponent,
  ],
  imports: [
    SharedModule
  ],
  exports: [
    SalesGraphComponent
  ]
})
export class MetricsModule { }
