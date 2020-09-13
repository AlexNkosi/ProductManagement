import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';
import {ProductListComponent} from './product-list.component'


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path:'productlist',component:ProductListComponent}
    ])
  ]
})
export class ProductModule { }
