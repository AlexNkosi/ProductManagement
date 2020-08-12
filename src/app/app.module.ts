import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatSliderModule } from '@angular/material/slider';
import { ProductListComponent } from './product-list/product-list.component';
@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
   
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule, MatSliderModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
