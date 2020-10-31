import { NgModule } from '@angular/core';
import { NavigationComponent } from './navigation.component';
import { SharedModule } from '../shared/shared.module';
import { NavigationRoutingModule } from './navigation-routing.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    NavigationComponent
  ],
  imports: [
    SharedModule,
    NavigationRoutingModule
  ],
  exports: [
    RouterModule,
    NavigationComponent
  ]
})
export class NavigationModule { }
