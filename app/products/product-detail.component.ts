import { Component, OnInit } from 'angular2/core';
import { RouteParams, Router, CanActivate } from 'angular2/router';

import { IProduct } from './product';
import { ProductService } from './product.service';
import { StarComponent } from '../shared/star.component';
import {LoginService} from '../shared/login.service'
import {isLoggedIn} from '../shared/is-LoggedIn'

import {appInjector} from '../app-injector';
import{LoginComponent} from '../shared/login.component';

//import {ComponentInstruction} from 'angular2/router';

@Component({
    templateUrl: 'app/products/product-detail.component.html',
    directives: [StarComponent]
})

//@CanActivate(() => isLoggedIn())
// @CanActivate((next,previous) => {
//   return isLoggedIn(next, previous);
// })
// @CanActivate((next, prev) => {
//   let injector = appInjector();
//   let router = injector.get(Router);

//   //this works
//   if (42 != 422) {
//     router.navigate(['Login']);
//     return false;
//   }

//   return true;
// })
export class ProductDetailComponent implements OnInit {
    pageTitle: string = 'Product Detail';
    product: IProduct;
    errorMessage: string;

    constructor(private _productService: ProductService,
        private _router: Router,
        private _routeParams: RouteParams,
        private _loginService: LoginService) {
    }

    ngOnInit() {
        console.log('ngoninit product.detail.component');
         
         //TODO: make a service out of this for route redirecting when not logged in
         if (!this.product) {
            let id = +this._routeParams.get('id');
            let productUrl = 'http://localhost:60323/Api/Products';
            //need to get the URL requested without doing this stuff
            //let origin = location.origin;
            //console.log('for url reroute' + origin);
            //console.log('ROUTE' + this._routeParams);
            var buildUrl = productUrl + '/' + id;
            console.log('ROUTE' + buildUrl);
            //console.log(this._router.renavigate());  investigate this
        }
        
        //if not logged in
        if ( !this._loginService.isLoggedIn())
         return this._router.navigate(['Login']);
   
       
        if (!this.product) {
            let id = +this._routeParams.get('id');
            // this.pageTitle += `: ${id}`;
            console.log("id=" + id);
            this.getProduct(id);
        }
    }

    getProduct(id: number) {
        this._productService.getProduct(id)
            .subscribe(
            product => this.product = product,
            error => this.errorMessage = <any>error);
    }

    onBack(): void {
        this._router.navigate(['Products']);
    }
    
}