import { Component, OnInit,Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {IProduct} from '../../product-list/product.interface';

@Component({
  selector: 'pm-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit  {


  products:IProduct;

  constructor( public dialogRef: MatDialogRef<ProductDetailsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: IProduct) { 
      
    }


    ngOnInit(): void {
      
      this.products = this.data;
      console.log(this.products)
    }

}
