 import { Injectable } from 'angular2/core';
 import { Http, Response } from 'angular2/http';
 import { Observable } from 'rxjs/Observable';

 import { IProduct } from './product';
 import {Headers} from 'angular2/http'
 import{HeadersService} from '../shared/headers.service';

 @Injectable()
 export class ProductService  {
     //private _productUrl = 'api/products/products.json'; // this is he one that works locally
    //TODO: get this into a Settings File
    private _productUrl = 'http://localhost:60323/Api/Products';

    private _logInfo: string;
    
   constructor(private _http: Http, private _headersService: HeadersService) { }

     getProducts(): Observable<IProduct[]> {
         
         return this._http.get(this._productUrl)
             .map((response: Response) => <IProduct[]> response.json())
             .do(data => console.log('All: ' +  JSON.stringify(data)))
             .catch(this.handleError);
     }

     getProduct(id: number): Observable<IProduct> {
    //      return this.getProducts()
    //          .map((products: IProduct[]) => products.find(p => p.productId === id));

     var buildUrl = this._productUrl + '/' + id;
     return this._http.get(buildUrl, this._headersService.getUserToken())
             .map((response: Response) => <IProduct> response.json())
             .do(data => console.log('Data: ' +  JSON.stringify(data)))
             .catch(this.handleError);
      }
      
    //    updateProduct(id: number): Observable<Response> {
    //         var buildUrl = this._productUrl + '/' + id;
            
    //         var theProduct = this.getProduct(id);
    //         theProduct.
    //       return this._http.put(buildUrl);
           
    //    } 
      

    private handleError(error: Response) {
        // TODO:send to logging infrastructure
        // instead of just logging to the console
        console.error(error);
        console.error(error.json().message);
        
        return Observable.throw(error.json().error || error.json().message);    //|| 'Server error');
    }
}
