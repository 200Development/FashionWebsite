import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { GoogleChartsModule } from 'angular-google-charts';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    BrowserModule,
    HttpClientModule,
    GoogleChartsModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    RouterModule,
    BrowserModule,
    HttpClientModule,
    GoogleChartsModule
  ]
})
export class SharedModule { }
