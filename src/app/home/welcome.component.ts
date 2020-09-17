import { Component,OnInit,ViewChild } from '@angular/core';
import {IProduct} from '../product-list/product.interface';
import {ProductService}  from '../shared/product.service';
import { NgbCarousel, NgbSlideEvent, NgbSlideEventSource } from '@ng-bootstrap/ng-bootstrap';
import {LoginService} from '../shared/login.service';


import {Router} from '@angular/router';

@Component({
  selector:'app-welcome',
  styleUrls:['./welcome.component.css'],
  templateUrl: './welcome.component.html'
})
export class WelcomeComponent implements OnInit {
  public pageTitle = 'Welcome';
  products :IProduct[];
  error: string ;



constructor(private productsData: ProductService, private router :Router,private logins:LoginService){

}
ngOnInit(): void {
  this.productsData.setProductUrl = "api/products/slideImages.json"
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
pauseOnFocus = true;

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
activateShopRouterLink(): void {
  if(this.logins.isLoggedIn){
  this.router.navigate(['/productlist']);
}
  else{
    this.router.navigate(['/login']);
  }
}

}
