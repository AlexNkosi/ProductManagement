import { Component,OnInit,ViewChild } from '@angular/core';
import {IProduct} from '../product-list/product.interface';
import {ProductService}  from '../shared/product.service';
import { NgbCarousel, NgbSlideEvent, NgbSlideEventSource } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector:'app-welcome',
  styleUrls:['./welcome.component.css'],
  templateUrl: './welcome.component.html'
})
export class WelcomeComponent implements OnInit {
  public pageTitle = 'Welcome';
  products :IProduct[];
  error: string ;

  count:bigint;


  /*
  this.productService.getProductList().subscribe({
    next: productsList => {
      this.products = productsList,
      
    this.filteredProducts = this.products,

      console.log(productsList)
      
    },
    error: err => this._error= err,
  })
  
  */

constructor(private productsData: ProductService){

}
ngOnInit(): void {

  this.productsData.getProductList().subscribe({
    next: productObj => {
      this.products = productObj, 
      console.log(productObj)
    }
  })

  

}

paused = false;
unpauseOnArrow = false;
pauseOnIndicator = false;
pauseOnHover = true;
PauseOnFocus = true;

@ViewChild('carousel', {static : true}) carousel: NgbCarousel;

togglePaused() {
  if (this.paused) {
    this.carousel.cycle();
  } else {
    this.carousel.pause();
  }
  this.paused = !this.paused;
}

onSlide(slideEvent: NgbSlideEvent) {
  if (this.unpauseOnArrow && slideEvent.paused &&
    (slideEvent.source === NgbSlideEventSource.ARROW_LEFT || slideEvent.source === NgbSlideEventSource.ARROW_RIGHT)) {
    this.togglePaused();
  }
  if (this.pauseOnIndicator && !slideEvent.paused && slideEvent.source === NgbSlideEventSource.INDICATOR) {
    this.togglePaused();
  }
}


}
