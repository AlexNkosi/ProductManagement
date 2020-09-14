import { Injectable } from '@angular/core';
import {IProduct} from '../product-list/product.interface'
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  productUrl: string = 'api/products/products.json';

 
  

  
  constructor( private httpClient :HttpClient) { 

  }

  
  public set setProductUrl(category : string) {
    this.productUrl = category;
  }
  

  getProductList(): Observable <IProduct[]>{

    return this.httpClient.get<IProduct[]>(this.productUrl);
  }
}
