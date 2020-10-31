import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AdminComponent } from './admin.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: 'admin', component: AdminComponent }
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class AdminRoutingModule { }
