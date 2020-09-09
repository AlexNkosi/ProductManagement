import { Component, OnInit } from '@angular/core';
// import { product } from './product';
import { IProduct } from './product.interface';
import {ProductService} from '../shared/product.service';
import {MatDialog} from '@angular/material/dialog';
import { ProductDetailsComponent } from '../productDetails/product-details/product-details.component';

@Component({
  selector: 'pm-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit  {


  

 productTitle : string = "Products";
 showImages: boolean = true;
 filteredProducts:IProduct[]; 
 products: IProduct[] ;
 displayedColumns:any[]=['Product','Available','Price','code','Rating'];


 private _filterBy: string; 
 private _list;
 private _error;

 public get listFilter(): string {

  return this._filterBy;

  }
  
  public set listFilter(value : string) {
    this._filterBy = value;
    this.filteredProducts = this.listFilter ? this.performFilter(this.listFilter ):this.products;
    console.log('called');
  }

  constructor(private productService: ProductService, private dialog:MatDialog) {
    this.listFilter = ''; 
    }

    
  
    
    



ngOnInit(): void {

 
  this.productService.getProductList().subscribe({
    next: productsList => {
      this.products = productsList,
      
    this.filteredProducts = this.products,

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

 openProductDetails(prodID:Number ):void {

  this.dialog.open( ProductDetailsComponent,{
    
    width:'550px',
    data:this.products.filter((prod:IProduct)=>
    prod.productID  == prodID
  )
   });

 

  console.log(this.products.filter((prod:IProduct)=>
  prod.productID  == prodID
),prodID)

 }


}
