import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { HomeComponent } from './home.component';
import { NavigationModule } from '../navigation/navigation.module';
import { RouterModule } from '@angular/router';
import { HomeRoutingModule } from './home-routing.module';



@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    SharedModule,
    HomeRoutingModule,
    NavigationModule
  ],
  exports: [
    RouterModule,
    HomeComponent
  ]
})
export class HomeModule { }
