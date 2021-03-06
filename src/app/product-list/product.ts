import { IProduct } from './product.interface';

export const product:IProduct[] = [

    {
        "productID": 1,
        "productName": "Pink PS4 Console",
        "productCode": "GDN-0011",
        "releaseDate": "March 19, 2019",
        "description": "Pink PS4 Joys.",
        "price": 44.22,
        "starRating": 3.2,
        "imageUrl": "assets/productImages/Glossy Pink PS4 Controller.jpg",
        showProductImage():boolean{
          return true;    
        }
      },
      {
        "productID": 2,
        "productName": "VR ",
        "productCode": "GDN-0023",
        "releaseDate": "March 18, 2019",
        "description": "15 gallon capacity rolling garden cart",
        "price": 32.99,
        "starRating": 4.2,
        "imageUrl": "assets/productImages/VR Headset for Nintendo Switch, OIVO 3D VR (Virtual Reality) Glasses, Labo Goggles Headset for Nintendo Switch.png",
      },
      {
        "productID": 5,
        "productName": "Gaming Hadsets",
        "productCode": "TBX-0048",
        "releaseDate": "May 21, 2019",
        "description": "Curved claw steel hammer",
        "price": 8.9,
        "starRating": 4.8,
        "imageUrl": "assets/productImages/HOT SELLING New Hybrid Technology Stereo Gaming LED Headphones with Mic for PC Gamer.jpg",
      },
      {
        "productID": 8,
        "productName": "Gaming Chair",
        "productCode": "TBX-0022",
        "releaseDate": "May 15, 2019",
        "description": "15-inch steel blade hand saw",
        "price": 11.55,
        "starRating": 3.7,
        "imageUrl": "assets/productImages/GTRACING PC & Racing Game Chair _ Wayfair.jpg",
      },
      {
        "productID": 10,
        "productName": "Gaming T-Shirt",
        "productCode": "GMG-0042",
        "releaseDate": "October 15, 2018",
        "description": "Standard two-button video game controller",
        "price": 35.95,
        "starRating": 4.6,
        "imageUrl": "assets/productImages/I Paused My Game To Be Here Shirt  Gamer Gift Video Game _ Etsy.jpg",
      }
   ]