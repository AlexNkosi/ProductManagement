import { Component, OnInit } from '@angular/core';
// import { product } from './product';
import { IProduct } from './product.interface';
import {ProductService} from '../shared/product.service';

@Component({
  selector: 'pm-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit  {


  

 productTitle : string = "Products";
 showImages: boolean = true;
 private _filterBy: string; 
 filteredProducts:IProduct[]; 
 products: IProduct[] ;
 public get listFilter(): string {

  return this._filterBy;

  }
  
  public set listFilter(value : string) {
    this._filterBy = value;
    this.filteredProducts = this.listFilter ? this.performFilter(this.listFilter ):this.products;
    console.log('called');
  }

  constructor(private productService: ProductService) {
    this.listFilter = ''; 
    
  }
 private _list;
 private _error;
ngOnInit(): void {

 
  this.productService.getProductList().subscribe({
    next: productsList => {
      this.products = productsList,
      
    this.filteredProducts = this.products   ,
      console.log(productsList)
    },
    error: err => this._error= err,
  })

}

 toogleImg(): void{
   this.showImages = !this.showImages;
 }

 performFilter(filterBy:string, ): IProduct[]{
   filterBy = filterBy.toLocaleLowerCase();

   return this.products.filter((products:IProduct ) => 
   products.productName.toLocaleLowerCase().indexOf(filterBy) !== -1);

 }



}
