 import { Component, OnInit }  from 'angular2/core';
 import { ROUTER_DIRECTIVES } from 'angular2/router';

 import { IProduct } from './product';
 import { ProductFilterPipe } from './product-filter.pipe';
 import { StarComponent } from '../shared/star.component';
 import { ProductService } from './product.service';
 import { LoginService } from '../shared/login.service';
  import { Observable } from 'rxjs/Observable';


 @Component({
    //selector: 'pm-products',
     templateUrl: 'app/products/product-list.component.html',
     styleUrls: ['app/products/product-list.component.css'],
     pipes: [ProductFilterPipe],
     directives: [StarComponent, ROUTER_DIRECTIVES]
 })
 
 
 export class ProductListComponent implements OnInit {
     
     pageTitle: string = 'Product Listing';
     products: IProduct[];
     //products: Observable<IProduct[]>;
     
     imageWidth: number = 50;
     imageMargin: number = 2;
     showImage: boolean = false;
     listFilter: string;
     errorMessage: string;



     constructor(private _productService: ProductService,
     private _loginService: LoginService) {
     }

     toggleImage(): void {
         this.showImage = !this.showImage;
     }

    ngOnInit(): void {
         console.log('ngOnInit: product-list-component');   
         var nameInfo = this._loginService.getUserName();
         console.log('userName: +++ : ' + nameInfo);   
           
        this._productService.getProducts()
                      .subscribe(
                        products => this.products = products,
                        error =>  this.errorMessage = <any>error);
          //this.products = this._productService.getProducts();
          //does not work
    }

    onRatingClicked(message: string): void {
        this.pageTitle = 'Product List: ' + message;
    }
 }
