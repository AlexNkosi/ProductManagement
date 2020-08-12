import { Component } from '@angular/core';
import { products } from './products';

@Component({
  selector: 'pm-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent  {

 productTitle : string = "Products";

product: any = products;

}
